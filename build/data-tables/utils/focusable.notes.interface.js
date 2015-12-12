
const Remarkable = require('remarkable');

class Notes {
  constructor(source, offset) {
    // the source data
    this.source = source;
    // the result data
    this.index = {};
    // unique numeric ID for messages
    this.messageCounter = offset || 0;
    // contains the registered notes to resolve duplicates
    this.messages = new Map();
    // contains @messages as
    // { "@message-id": "actual message" }
    this.references = {};
    // contains redirection-key to message-key mapping
    // { "source --- target": "actual message" }
    this.redirections = {};
    // go, baby, go!
    this._importSource();
  }

  _importSource() {
    Object.keys(this.source).forEach(function(ident) {
      if (this._importReferencedMessage(ident)) {
        // we've hit a "@reference-message"
        return;
      }

      this._importIdent(ident);
    }, this);
  }

  _importIdent(ident) {
    // container to import into
    const _map = this._getEmptyIndexStructure();
    // data to import
    const data = this.source[ident];
    // import messages that apply to every browser
    this._importNotes(_map.general, data.general || data);
    // import messages that apply to specific browsers
    data.browsers && Object.keys(data.browsers).forEach(function(browser) {
      this._importBrowserNotes(browser, data, _map);
    }, this);
    // import messages that apply to specific browsers
    data.redirect && Object.keys(data.redirect).forEach(function(mapping) {
      this._importRedirectionNotes(mapping, data, _map);
    }, this);
    // import messages that apply to ally.js behavior
    data.ally && this._importNotes(_map.ally, data.ally);
    // actually import data to Notes instance
    this._importMapToIndex(ident, _map);
    // resolve aliasing
    data.alias && data.alias.forEach(function(_ident) {
      this._importMapToIndex(_ident, _map);
    }, this);
  }

  _getEmptyIndexStructure() {
    return {
      general: [],
      ally: [],
      browsers: {},
      target: {},
    };
  }

  _importReferencedMessage(ident) {
    if (ident[0] !== '@') {
      return false;
    }

    // import referenced message
    this.references[ident] = this.source[ident];
    this._addMessage(this.references[ident]);
    // remove from source as it is obsolete now
    delete this.source[ident];
    return true;
  }

  _addMessage(message) {
    // messages may be registered redundantly,
    // and should then use the already known key
    const key = this.messages.get(message) || (++this.messageCounter);
    // save the message (possibly again, but whatever)
    this.messages.set(message, key);
    return key;
  }

  _registerMessage(message) {
    message = this._resolveReferencedMessage(message);
    return this._addMessage(message);
  }

  _resolveReferencedMessage(message) {
    // message references begin with @
    return message[0] === '@' ? this.references[message] : message;
  }

  _importNotes(keys, data) {
    if (typeof data === 'string') {
      data = [data];
    }

    if (!Array.isArray(data)) {
      return;
    }

    data.forEach(function(message) {
      const key = this._registerMessage(message);
      keys.push(key);
    }, this);
  }

  _importBrowserNotes(browser, data, map) {
    if (!map.browsers[browser]) {
      map.browsers[browser] = [];
    }

    const _browser = data.browsers[browser];
    this._importNotes(map.browsers[browser], _browser);
  }

  _importRedirectionNotes(mapping, data) {
    const message = data.redirect[mapping];
    const key = this._registerMessage(message);
    this.redirections[mapping] = key;
  }

  _importMapToIndex(ident, map) {
    if (!this.index[ident]) {
      this.index[ident] = this._getEmptyIndexStructure();
    }

    const _index = this.index[ident];
    // messages that apply to every browser
    map.general.forEach(key => _index.general.push(key));
    // messages that apply to ally.js behavior
    map.ally.forEach(key => _index.ally.push(key));
    // messages that apply to specific browsers
    Object.keys(map.browsers).forEach(function(browser) {
      this._importBrowserMapToIndex(browser, map, _index);
    }, this);
  }

  _importBrowserMapToIndex(browser, map, index) {
    if (!index.browsers[browser]) {
      index.browsers[browser] = [];
    }

    map.browsers[browser].forEach(key => index.browsers[browser].push(key));
  }

  registerRedirection(browser, source, target) {
    if (!this.index[source]) {
      this.index[source] = this._getEmptyIndexStructure();
    }

    const key = source + ' --- ' + target;
    let message = this.redirections[key];
    if (!message) {
      /*eslint-disable no-console */
      console.warn('no redirect resolution for "' + key + '"');
      /*eslint-enable no-console */
      message = this._addMessage('Redirecting to ' + target);
      this.redirections[key] = message;
    }

    this.index[source].target[browser] = message;
  }

  getNotes() {
    const md = new Remarkable({});
    const notes = {};
    this.messages.forEach(function(key, message) {
      notes[key] = md.render(message);
    });

    return notes;
  }
  getIdent(ident) {
    const _map = this.index[ident];
    return _map && _map.general || [];
  }
  getTarget(ident, browser) {
    const _map = this.index[ident];
    return _map && _map.target[browser] || [];
  }
  getBrowser(ident, browser) {
    const _map = this.index[ident];
    return _map && _map.browsers[browser] || [];
  }
  getAlly(ident) {
    const _map = this.index[ident];
    return _map && _map.ally || [];
  }
}

module.exports = Notes;
