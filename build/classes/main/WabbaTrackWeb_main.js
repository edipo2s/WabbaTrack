if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'WabbaTrackWeb_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'WabbaTrackWeb_main'.");
}
var WabbaTrackWeb_main = function (_, Kotlin) {
  'use strict';
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var hasClass = Kotlin.kotlin.dom.hasClass_46n0ku$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var substringBeforeLast = Kotlin.kotlin.text.substringBeforeLast_j4ogox$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Enum = Kotlin.kotlin.Enum;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var substringAfter = Kotlin.kotlin.text.substringAfter_j4ogox$;
  CardAttribute.prototype = Object.create(Enum.prototype);
  CardAttribute.prototype.constructor = CardAttribute;
  CardSet.prototype = Object.create(Enum.prototype);
  CardSet.prototype.constructor = CardSet;
  CardRarity.prototype = Object.create(Enum.prototype);
  CardRarity.prototype.constructor = CardRarity;
  CardType.prototype = Object.create(Enum.prototype);
  CardType.prototype.constructor = CardType;
  CardRace.prototype = Object.create(Enum.prototype);
  CardRace.prototype.constructor = CardRace;
  CardKeyword.prototype = Object.create(Enum.prototype);
  CardKeyword.prototype.constructor = CardKeyword;
  CardArenaTier.prototype = Object.create(Enum.prototype);
  CardArenaTier.prototype.constructor = CardArenaTier;
  CardArenaTierPlusOperator.prototype = Object.create(Enum.prototype);
  CardArenaTierPlusOperator.prototype.constructor = CardArenaTierPlusOperator;
  CardArenaTierPlusType.prototype = Object.create(Enum.prototype);
  CardArenaTierPlusType.prototype.constructor = CardArenaTierPlusType;
  DeckClass.prototype = Object.create(Enum.prototype);
  DeckClass.prototype.constructor = DeckClass;
  DeckType.prototype = Object.create(Enum.prototype);
  DeckType.prototype.constructor = DeckType;
  MatchMode.prototype = Object.create(Enum.prototype);
  MatchMode.prototype.constructor = MatchMode;
  PatchType.prototype = Object.create(Enum.prototype);
  PatchType.prototype.constructor = PatchType;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  function addDeckClassIcons($receiver, cls) {
    var $receiver_0 = document.createElement('img');
    addClass($receiver_0, ['wt-attr']);
    var $receiver_1 = cls.attr1.name.toLowerCase();
    $receiver_0.setAttribute('src', 'images/Attribute/' + ($receiver_1.length > 0 ? $receiver_1.substring(0, 1).toUpperCase() + $receiver_1.substring(1) : $receiver_1) + '.png');
    $receiver.appendChild($receiver_0);
    var $receiver_2 = document.createElement('img');
    addClass($receiver_2, ['wt-attr']);
    var $receiver_3 = cls.attr2.name.toLowerCase();
    $receiver_2.setAttribute('src', 'images/Attribute/' + ($receiver_3.length > 0 ? $receiver_3.substring(0, 1).toUpperCase() + $receiver_3.substring(1) : $receiver_3) + '.png');
    $receiver.appendChild($receiver_2);
  }
  function removeAllChilds($receiver) {
    var tmp$;
    while ($receiver.childElementCount > 0) {
      if ((tmp$ = $receiver.lastChild) != null) {
        $receiver.removeChild(tmp$);
      }
    }
  }
  function foreach($receiver, action) {
    var tmp$;
    tmp$ = $receiver.length;
    for (var i = 0; i <= tmp$; i++)
      action($receiver.item(i));
  }
  function getString($receiver, key) {
    return Kotlin.toString($receiver[key]);
  }
  function getInt($receiver, key) {
    return toInt(getString($receiver, key));
  }
  function getBoolean($receiver, key) {
    if (Kotlin.equals(getString($receiver, key), 'true'))
      return true;
    else
      return false;
  }
  function UI() {
    UI_instance = this;
    this.header$delegate = lazy(UI$header$lambda);
    this.statistics_table_player$delegate = lazy(UI$statistics_table_player$lambda);
    this.statistics_table_opponent$delegate = lazy(UI$statistics_table_opponent$lambda);
    this.radio_ranked$delegate = lazy(UI$radio_ranked$lambda);
    this.radio_casual$delegate = lazy(UI$radio_casual$lambda);
    this.radio_arena$delegate = lazy(UI$radio_arena$lambda);
    this.toogle_winrate$delegate = lazy(UI$toogle_winrate$lambda);
    this.dropdown_seasons$delegate = lazy(UI$dropdown_seasons$lambda);
    this.dropdown_seasons_label$delegate = lazy(UI$dropdown_seasons_label$lambda);
  }
  Object.defineProperty(UI.prototype, 'header', {
    get: function () {
      var $receiver = this.header$delegate;
      new Kotlin.PropertyMetadata('header');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'statistics_table_player', {
    get: function () {
      var $receiver = this.statistics_table_player$delegate;
      new Kotlin.PropertyMetadata('statistics_table_player');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'statistics_table_opponent', {
    get: function () {
      var $receiver = this.statistics_table_opponent$delegate;
      new Kotlin.PropertyMetadata('statistics_table_opponent');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'radio_ranked', {
    get: function () {
      var $receiver = this.radio_ranked$delegate;
      new Kotlin.PropertyMetadata('radio_ranked');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'radio_casual', {
    get: function () {
      var $receiver = this.radio_casual$delegate;
      new Kotlin.PropertyMetadata('radio_casual');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'radio_arena', {
    get: function () {
      var $receiver = this.radio_arena$delegate;
      new Kotlin.PropertyMetadata('radio_arena');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'toogle_winrate', {
    get: function () {
      var $receiver = this.toogle_winrate$delegate;
      new Kotlin.PropertyMetadata('toogle_winrate');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'dropdown_seasons', {
    get: function () {
      var $receiver = this.dropdown_seasons$delegate;
      new Kotlin.PropertyMetadata('dropdown_seasons');
      return $receiver.value;
    }
  });
  Object.defineProperty(UI.prototype, 'dropdown_seasons_label', {
    get: function () {
      var $receiver = this.dropdown_seasons_label$delegate;
      new Kotlin.PropertyMetadata('dropdown_seasons_label');
      return $receiver.value;
    }
  });
  UI.prototype.addTabs = function () {
    var $receiver = document;
    var $receiver_0 = this.header;
    var $receiver_1 = $receiver.createElement('div');
    addClass($receiver_1, ['wt-tabs mdl-layout__tab-bar mdl-js-ripple-effect']);
    var $receiver_2 = $receiver.createElement('a');
    addClass($receiver_2, ['mdl-layout__tab is-active']);
    $receiver_2.setAttribute('href', '#history');
    $receiver_2.textContent = 'History';
    $receiver_1.appendChild($receiver_2);
    var $receiver_3 = $receiver.createElement('a');
    addClass($receiver_3, ['mdl-layout__tab']);
    $receiver_3.setAttribute('href', '#statistics');
    $receiver_3.textContent = 'Statistics';
    $receiver_1.appendChild($receiver_3);
    $receiver_0.appendChild($receiver_1);
  };
  function UI$showUserContainers$lambda$lambda(it) {
    it != null ? addClass(it, ['hidden']) : null;
  }
  function UI$showUserContainers$lambda$lambda_0(it) {
    it != null ? removeClass(it, ['hidden']) : null;
  }
  function UI$showUserContainers$lambda$lambda_1(it) {
    it != null ? removeClass(it, ['hidden']) : null;
  }
  UI.prototype.showUserContainers = function () {
    var $receiver = document;
    foreach($receiver.getElementsByClassName('wt-container-noid'), UI$showUserContainers$lambda$lambda);
    foreach($receiver.getElementsByClassName('mdl-layout__tab-bar-container'), UI$showUserContainers$lambda$lambda_0);
    foreach($receiver.getElementsByClassName('wt-container'), UI$showUserContainers$lambda$lambda_1);
  };
  UI.prototype.buildStatisticsTable = function () {
    var $receiver = document;
    var $receiver_0 = DeckClass$values();
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver_0.length; ++tmp$) {
      var element = $receiver_0[tmp$];
      var tmp$_0 = this.statistics_table_player;
      var $receiver_1 = $receiver.createElement('tr');
      $receiver_1.id = 'player' + element.name;
      var $receiver_2 = $receiver.createElement('td');
      addDeckClassIcons($receiver_2, element);
      $receiver_1.appendChild($receiver_2);
      tmp$_0.appendChild($receiver_1);
      var tmp$_1 = this.statistics_table_opponent;
      var $receiver_3 = $receiver.createElement('th');
      addDeckClassIcons($receiver_3, element);
      tmp$_1.appendChild($receiver_3);
    }
    var tmp$_2 = this.statistics_table_opponent;
    var $receiver_4 = $receiver.createElement('th');
    $receiver_4.textContent = 'Total';
    tmp$_2.appendChild($receiver_4);
    var tmp$_3 = this.statistics_table_player;
    var $receiver_5 = $receiver.createElement('tr');
    $receiver_5.id = 'playerTotal';
    var $receiver_6 = $receiver.createElement('td');
    $receiver_6.textContent = 'Total';
    $receiver_5.appendChild($receiver_6);
    tmp$_3.appendChild($receiver_5);
  };
  UI.prototype.buildSeasonFilter_pkk503$ = function (seasons, onItemClick) {
    this.dropdown_seasons.appendChild(this.createSeasonItem_0(null, onItemClick));
    var tmp$;
    tmp$ = seasons.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.dropdown_seasons.appendChild(this.createSeasonItem_0(element, onItemClick));
    }
  };
  UI.prototype.updateSeasonLabel_xjqf0i$ = function (season) {
    var tmp$;
    this.dropdown_seasons_label.textContent = (tmp$ = season != null ? season.year + ' ' + season.month : null) != null ? tmp$ : 'All Seasons';
  };
  function UI$createSeasonItem$lambda$lambda(closure$onItemClick, closure$season) {
    return function (it) {
      $('.mdl-menu__container').removeClass('is-visible');
      closure$onItemClick(closure$season);
    };
  }
  UI.prototype.createSeasonItem_0 = function (season, onItemClick) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = document.createElement('li'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var tmp$_0;
    addClass($receiver, ['mdl-menu__item mdl-js-ripple-effect']);
    $receiver.textContent = (tmp$_0 = season != null ? season.year + ' ' + season.month : null) != null ? tmp$_0 : 'All Seasons';
    $receiver.onclick = UI$createSeasonItem$lambda$lambda(onItemClick, season);
    var $receiver_0 = document.createElement('span');
    addClass($receiver_0, ['mdl-ripple']);
    $receiver.appendChild($receiver_0);
    componentHandler.upgradeElement($receiver);
    return $receiver;
  };
  UI.prototype.createMatchResult_vux9f0$ = function (wins, loses) {
    var $receiver = document.createElement('th');
    var tmp$, tmp$_0;
    $receiver.setAttribute('style', 'text-align: center;');
    var matches = wins + loses | 0;
    var winRate = (100 * wins | 0) / matches | 0;
    if (resultAsWinRate) {
      var $receiver_0 = winRate.toString() + '%';
      $receiver.textContent = (tmp$ = matches > 0 ? $receiver_0 : null) != null ? tmp$ : '-';
    }
     else {
      var $receiver_1 = wins.toString() + '/' + loses;
      $receiver.textContent = (tmp$_0 = matches > 0 ? $receiver_1 : null) != null ? tmp$_0 : '-';
    }
    return $receiver;
  };
  function UI$header$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('header'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$statistics_table_player$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-player-cls'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$statistics_table_opponent$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-opponent-cls'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$radio_ranked$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-ranked'), HTMLLabelElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$radio_casual$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-casual'), HTMLLabelElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$radio_arena$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-arena'), HTMLLabelElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$toogle_winrate$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-winrate'), HTMLLabelElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$dropdown_seasons$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-seasons'), HTMLUListElement) ? tmp$ : Kotlin.throwCCE();
  }
  function UI$dropdown_seasons_label$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementById('statistics-seasons-label'), HTMLSpanElement) ? tmp$ : Kotlin.throwCCE();
  }
  UI.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'UI',
    interfaces: []
  };
  var UI_instance = null;
  function UI_getInstance() {
    if (UI_instance === null) {
      new UI();
    }
    return UI_instance;
  }
  var TESLEGENDS_DB_URL;
  var userID;
  var userMatches;
  var currentMode;
  var currentSeason;
  function get_currentSeason() {
    return currentSeason;
  }
  function set_currentSeason(value) {
    currentSeason = value;
    UI_getInstance().updateSeasonLabel_xjqf0i$(value);
  }
  var resultAsWinRate;
  function Main$lambda$lambda(season) {
    set_currentSeason(season);
    showMatches();
  }
  function Main$lambda(seasons) {
    if (!seasons.isEmpty()) {
      set_currentSeason(seasons.get_za3lpa$(0));
    }
    UI_getInstance().buildSeasonFilter_pkk503$(seasons, Main$lambda$lambda);
  }
  function Main$lambda$lambda_0(it) {
    return it.uuid;
  }
  function Main$lambda_0(matches) {
    userMatches = Kotlin.kotlin.collections.sortedWith_eknfly$(matches, new Kotlin.kotlin.comparisons.compareByDescending$f(Main$lambda$lambda_0));
    showMatches();
  }
  function Main() {
    if ((new URL(document.URL)).searchParams.has('id')) {
      userID = (new URL(document.URL)).searchParams.get('id');
      UI_getInstance().addTabs();
      UI_getInstance().showUserContainers();
      UI_getInstance().buildStatisticsTable();
      configureListeners();
      getSeasons(Main$lambda);
      getUserMatches(Main$lambda_0);
    }
  }
  function configureListeners$lambda(it) {
    currentMode = MatchMode$RANKED_getInstance();
    showMatches();
  }
  function configureListeners$lambda_0(it) {
    currentMode = MatchMode$CASUAL_getInstance();
    showMatches();
  }
  function configureListeners$lambda_1(it) {
    currentMode = MatchMode$ARENA_getInstance();
    showMatches();
  }
  function configureListeners$lambda_2(it) {
    resultAsWinRate = hasClass(UI_getInstance().toogle_winrate, 'is-checked');
    showMatches();
  }
  function configureListeners() {
    UI_getInstance().radio_ranked.onchange = configureListeners$lambda;
    UI_getInstance().radio_casual.onchange = configureListeners$lambda_0;
    UI_getInstance().radio_arena.onchange = configureListeners$lambda_1;
    UI_getInstance().toogle_winrate.onchange = configureListeners$lambda_2;
  }
  function getUserMatches$ObjectLiteral() {
    this.method_5kbz6n$_0 = 'GET';
    this.credentials_5kbz6n$_0 = 'same-origin';
    this.headers_5kbz6n$_0 = json([to('Accept', 'application/json')]);
  }
  Object.defineProperty(getUserMatches$ObjectLiteral.prototype, 'method', {
    get: function () {
      return this.method_5kbz6n$_0;
    },
    set: function (method) {
      this.method_5kbz6n$_0 = method;
    }
  });
  Object.defineProperty(getUserMatches$ObjectLiteral.prototype, 'credentials', {
    get: function () {
      return this.credentials_5kbz6n$_0;
    },
    set: function (credentials) {
      this.credentials_5kbz6n$_0 = credentials;
    }
  });
  Object.defineProperty(getUserMatches$ObjectLiteral.prototype, 'headers', {
    get: function () {
      return this.headers_5kbz6n$_0;
    },
    set: function (headers) {
      this.headers_5kbz6n$_0 = headers;
    }
  });
  getUserMatches$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function getUserMatches$lambda$lambda(closure$onSuccess) {
    return function (json_0) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = json_0, Object) ? tmp$ : Kotlin.throwCCE();
      var keys = Object.keys(tmp$_0);
      var tmp$_1 = closure$onSuccess;
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(keys.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== keys.length; ++tmp$_2) {
        var item = keys[tmp$_2];
        var tmp$_3;
        destination.add_11rb$(Match$Companion_getInstance().parse_uvq6m$(item, Kotlin.isType(tmp$_3 = json_0[item], Object) ? tmp$_3 : Kotlin.throwCCE()));
      }
      tmp$_1(destination);
    };
  }
  function getUserMatches$lambda(closure$onSuccess) {
    return function (response) {
      return response.json().then(getUserMatches$lambda$lambda(closure$onSuccess));
    };
  }
  function getUserMatches(onSuccess) {
    window.fetch(TESLEGENDS_DB_URL + '/users/' + Kotlin.toString(userID) + '/matches.json', new getUserMatches$ObjectLiteral()).then(getUserMatches$lambda(onSuccess));
  }
  function getSeasons$ObjectLiteral() {
    this.method_fqr8x3$_0 = 'GET';
    this.credentials_fqr8x3$_0 = 'same-origin';
    this.headers_fqr8x3$_0 = json([to('Accept', 'application/json')]);
  }
  Object.defineProperty(getSeasons$ObjectLiteral.prototype, 'method', {
    get: function () {
      return this.method_fqr8x3$_0;
    },
    set: function (method) {
      this.method_fqr8x3$_0 = method;
    }
  });
  Object.defineProperty(getSeasons$ObjectLiteral.prototype, 'credentials', {
    get: function () {
      return this.credentials_fqr8x3$_0;
    },
    set: function (credentials) {
      this.credentials_fqr8x3$_0 = credentials;
    }
  });
  Object.defineProperty(getSeasons$ObjectLiteral.prototype, 'headers', {
    get: function () {
      return this.headers_fqr8x3$_0;
    },
    set: function (headers) {
      this.headers_fqr8x3$_0 = headers;
    }
  });
  getSeasons$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function getSeasons$lambda$lambda$lambda(it) {
    return it;
  }
  function getSeasons$lambda$lambda(closure$onSuccess) {
    return function (json_0) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = json_0, Object) ? tmp$ : Kotlin.throwCCE();
      var keys = Object.keys(tmp$_0);
      var tmp$_1 = closure$onSuccess;
      var $receiver = toList(keys);
      var $receiver_0 = Kotlin.kotlin.collections.sortedWith_eknfly$($receiver, new Kotlin.kotlin.comparisons.compareByDescending$f(getSeasons$lambda$lambda$lambda));
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver_0, 10));
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(new Season(item));
      }
      tmp$_1(destination);
    };
  }
  function getSeasons$lambda(closure$onSuccess) {
    return function (response) {
      return response.json().then(getSeasons$lambda$lambda(closure$onSuccess));
    };
  }
  function getSeasons(onSuccess) {
    window.fetch('https://tes-legends-assistant.firebaseio.com/seasons.json', new getSeasons$ObjectLiteral()).then(getSeasons$lambda(onSuccess));
  }
  function showMatches() {
    var $receiver = document;
    var tmp$, tmp$_0, tmp$_1;
    if ((tmp$ = $receiver.getElementById('history-list')) != null) {
      var tmp$_2, tmp$_3;
      removeAllChilds(tmp$);
      var tmp$_4;
      if (userMatches != null) {
        var $receiver_0 = userMatches;
        var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        var tmp$_5;
        tmp$_5 = $receiver_0.iterator();
        while (tmp$_5.hasNext()) {
          var element = tmp$_5.next();
          if (element.mode === currentMode) {
            destination.add_11rb$(element);
          }
        }
        tmp$_4 = destination;
      }
       else
        tmp$_4 = null;
      var tmp$_6;
      if ((tmp$_2 = tmp$_4) != null) {
        var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
        var tmp$_7;
        tmp$_7 = tmp$_2.iterator();
        while (tmp$_7.hasNext()) {
          var element_0 = tmp$_7.next();
          var tmp$_8;
          if (get_currentSeason() == null || Kotlin.equals(element_0.season, (tmp$_8 = get_currentSeason()) != null ? tmp$_8.id : null)) {
            destination_0.add_11rb$(element_0);
          }
        }
        tmp$_6 = destination_0;
      }
       else
        tmp$_6 = null;
      if ((tmp$_3 = tmp$_6) != null) {
        var tmp$_9;
        tmp$_9 = tmp$_3.iterator();
        while (tmp$_9.hasNext()) {
          var element_1 = tmp$_9.next();
          var $receiver_1 = $receiver.createElement('tr');
          var $receiver_2 = $receiver.createElement('th');
          var tmp$_10;
          $receiver_2.setAttribute('style', 'text-align: center;');
          var $receiver_3 = $receiver.createElement((tmp$_10 = element_1.first ? 'img' : null) != null ? tmp$_10 : 'div');
          addClass($receiver_3, ['wt-history-first']);
          if (element_1.first) {
            $receiver_3.setAttribute('src', 'images/ic_first.png');
          }
          $receiver_2.appendChild($receiver_3);
          $receiver_1.appendChild($receiver_2);
          var $receiver_4 = $receiver.createElement('th');
          $receiver_4.setAttribute('style', 'text-align: center;');
          addDeckClassIcons($receiver_4, element_1.player.cls);
          var $receiver_5 = $receiver.createElement('span');
          addClass($receiver_5, ['wt-history-vs']);
          $receiver_5.textContent = 'vs';
          $receiver_4.appendChild($receiver_5);
          addDeckClassIcons($receiver_4, element_1.opponent.cls);
          $receiver_1.appendChild($receiver_4);
          var $receiver_6 = $receiver.createElement('th');
          var tmp$_11;
          $receiver_6.setAttribute('style', 'text-align: center;');
          var $receiver_7 = $receiver.createElement((tmp$_11 = element_1.legend ? 'img' : null) != null ? tmp$_11 : 'div');
          addClass($receiver_7, ['wt-history-legend']);
          if (element_1.legend) {
            $receiver_7.setAttribute('src', 'images/ic_legend.png');
          }
          $receiver_6.appendChild($receiver_7);
          $receiver_1.appendChild($receiver_6);
          var $receiver_8 = $receiver.createElement('th');
          $receiver_8.setAttribute('style', 'text-align: center;');
          var $receiver_9 = $receiver.createElement('span');
          addClass($receiver_9, ['wt-history-rank']);
          if (element_1.rank > 0) {
            $receiver_9.textContent = element_1.rank.toString();
          }
          $receiver_8.appendChild($receiver_9);
          $receiver_1.appendChild($receiver_8);
          var $receiver_10 = $receiver.createElement('th');
          $receiver_10.setAttribute('style', 'text-align: center;');
          var $receiver_11 = $receiver.createElement('span');
          var tmp$_12, tmp$_13;
          var $receiver_12 = 'wt-history-win';
          addClass($receiver_11, [(tmp$_12 = element_1.win ? $receiver_12 : null) != null ? tmp$_12 : 'wt-history-loss']);
          $receiver_11.textContent = (tmp$_13 = element_1.win ? 'Win' : null) != null ? tmp$_13 : 'Loss';
          $receiver_10.appendChild($receiver_11);
          $receiver_1.appendChild($receiver_10);
          var $receiver_13 = $receiver.createElement('th');
          $receiver_13.setAttribute('style', 'text-align: center;');
          var $receiver_14 = $receiver.createElement('span');
          addClass($receiver_14, ['wt-history-time']);
          $receiver_14.textContent = replace(substringBeforeLast(element_1.uuid, 'T'), '-', '/');
          $receiver_13.appendChild($receiver_14);
          $receiver_1.appendChild($receiver_13);
          tmp$.appendChild($receiver_1);
        }
      }
    }
    var totalWins = {v: 0};
    var totalLosses = {v: 0};
    var tmp$_14;
    if (userMatches != null) {
      var $receiver_15 = userMatches;
      var destination_1 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
      var tmp$_15;
      tmp$_15 = $receiver_15.iterator();
      while (tmp$_15.hasNext()) {
        var element_2 = tmp$_15.next();
        var key = element_2.player.cls;
        var tmp$_16;
        var value = destination_1.get_11rb$(key);
        if (value == null) {
          var answer = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
          destination_1.put_xwzc9p$(key, answer);
          tmp$_16 = answer;
        }
         else {
          tmp$_16 = value;
        }
        var list = tmp$_16;
        list.add_11rb$(element_2);
      }
      tmp$_14 = destination_1;
    }
     else
      tmp$_14 = null;
    var tmp$_17;
    if ((tmp$_0 = tmp$_14) != null) {
      var destination_2 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$(Kotlin.kotlin.collections.mapCapacity_za3lpa$(tmp$_0.size));
      var tmp$_18;
      tmp$_18 = tmp$_0.entries.iterator();
      while (tmp$_18.hasNext()) {
        var element_3 = tmp$_18.next();
        var tmp$_19 = destination_2.put_xwzc9p$;
        var tmp$_20 = element_3.key;
        var $receiver_16 = element_3.value;
        var destination_3 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
        var tmp$_21;
        tmp$_21 = $receiver_16.iterator();
        while (tmp$_21.hasNext()) {
          var element_4 = tmp$_21.next();
          var key_0 = element_4.opponent.cls;
          var tmp$_22;
          var value_0 = destination_3.get_11rb$(key_0);
          if (value_0 == null) {
            var answer_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
            destination_3.put_xwzc9p$(key_0, answer_0);
            tmp$_22 = answer_0;
          }
           else {
            tmp$_22 = value_0;
          }
          var list_0 = tmp$_22;
          list_0.add_11rb$(element_4);
        }
        tmp$_19.call(destination_2, tmp$_20, destination_3);
      }
      tmp$_17 = destination_2;
    }
     else
      tmp$_17 = null;
    var matchesByClass = tmp$_17;
    var $receiver_17 = DeckClass$values();
    var tmp$_23;
    for (tmp$_23 = 0; tmp$_23 !== $receiver_17.length; ++tmp$_23) {
      var element_5 = $receiver_17[tmp$_23];
      var tmp$_24;
      if ((tmp$_24 = $receiver.getElementById('player' + element_5.name)) != null) {
        var tmp$_25;
        while (tmp$_24.childElementCount > 1) {
          if ((tmp$_25 = tmp$_24.lastChild) != null) {
            tmp$_24.removeChild(tmp$_25);
          }
        }
        var totalClassWins = {v: 0};
        var totalClassLosses = {v: 0};
        var $receiver_18 = DeckClass$values();
        var tmp$_26;
        for (tmp$_26 = 0; tmp$_26 !== $receiver_18.length; ++tmp$_26) {
          var element_6 = $receiver_18[tmp$_26];
          var tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31;
          var tmp$_32;
          if ((tmp$_28 = (tmp$_27 = matchesByClass != null ? matchesByClass.get_11rb$(element_5) : null) != null ? tmp$_27.get_11rb$(element_6) : null) != null) {
            var destination_4 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
            var tmp$_33;
            tmp$_33 = tmp$_28.iterator();
            while (tmp$_33.hasNext()) {
              var element_7 = tmp$_33.next();
              if (element_7.mode === currentMode) {
                destination_4.add_11rb$(element_7);
              }
            }
            tmp$_32 = destination_4;
          }
           else
            tmp$_32 = null;
          var tmp$_34;
          if ((tmp$_29 = tmp$_32) != null) {
            var destination_5 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
            var tmp$_35;
            tmp$_35 = tmp$_29.iterator();
            while (tmp$_35.hasNext()) {
              var element_8 = tmp$_35.next();
              var tmp$_36;
              if (get_currentSeason() == null || Kotlin.equals(element_8.season, (tmp$_36 = get_currentSeason()) != null ? tmp$_36.id : null)) {
                destination_5.add_11rb$(element_8);
              }
            }
            tmp$_34 = destination_5;
          }
           else
            tmp$_34 = null;
          var classMatches = tmp$_34;
          var tmp$_37;
          if (classMatches != null) {
            var tmp$_38;
            var count_26 = 0;
            tmp$_38 = classMatches.iterator();
            while (tmp$_38.hasNext()) {
              var element_9 = tmp$_38.next();
              if (element_9.win) {
                count_26 = count_26 + 1 | 0;
              }
            }
            tmp$_37 = count_26;
          }
           else
            tmp$_37 = null;
          var wins = (tmp$_30 = tmp$_37) != null ? tmp$_30 : 0;
          var tmp$_39;
          if (classMatches != null) {
            var tmp$_40;
            var count_27 = 0;
            tmp$_40 = classMatches.iterator();
            while (tmp$_40.hasNext()) {
              var element_10 = tmp$_40.next();
              if (!element_10.win) {
                count_27 = count_27 + 1 | 0;
              }
            }
            tmp$_39 = count_27;
          }
           else
            tmp$_39 = null;
          var loses = (tmp$_31 = tmp$_39) != null ? tmp$_31 : 0;
          totalClassWins.v = totalClassWins.v + wins | 0;
          totalClassLosses.v = totalClassLosses.v + loses | 0;
          tmp$_24.appendChild(UI_getInstance().createMatchResult_vux9f0$(wins, loses));
        }
        tmp$_24.appendChild(UI_getInstance().createMatchResult_vux9f0$(totalClassWins.v, totalClassLosses.v));
        totalWins.v = totalWins.v + totalClassWins.v | 0;
        totalLosses.v = totalLosses.v + totalClassLosses.v | 0;
      }
    }
    if ((tmp$_1 = $receiver.getElementById('playerTotal')) != null) {
      var tmp$_41;
      while (tmp$_1.childElementCount > 1) {
        if ((tmp$_41 = tmp$_1.lastChild) != null) {
          tmp$_1.removeChild(tmp$_41);
        }
      }
      var tmp$_42;
      if (userMatches != null) {
        var $receiver_19 = userMatches;
        var destination_6 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
        var tmp$_43;
        tmp$_43 = $receiver_19.iterator();
        while (tmp$_43.hasNext()) {
          var element_11 = tmp$_43.next();
          var key_1 = element_11.opponent.cls;
          var tmp$_44;
          var value_1 = destination_6.get_11rb$(key_1);
          if (value_1 == null) {
            var answer_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
            destination_6.put_xwzc9p$(key_1, answer_1);
            tmp$_44 = answer_1;
          }
           else {
            tmp$_44 = value_1;
          }
          var list_1 = tmp$_44;
          list_1.add_11rb$(element_11);
        }
        tmp$_42 = destination_6;
      }
       else
        tmp$_42 = null;
      var matchesByOpponent = tmp$_42;
      var $receiver_20 = DeckClass$values();
      var tmp$_45;
      for (tmp$_45 = 0; tmp$_45 !== $receiver_20.length; ++tmp$_45) {
        var element_12 = $receiver_20[tmp$_45];
        var tmp$_46, tmp$_47, tmp$_48, tmp$_49;
        var tmp$_50;
        if ((tmp$_46 = matchesByOpponent != null ? matchesByOpponent.get_11rb$(element_12) : null) != null) {
          var destination_7 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
          var tmp$_51;
          tmp$_51 = tmp$_46.iterator();
          while (tmp$_51.hasNext()) {
            var element_13 = tmp$_51.next();
            if (element_13.mode === currentMode) {
              destination_7.add_11rb$(element_13);
            }
          }
          tmp$_50 = destination_7;
        }
         else
          tmp$_50 = null;
        var tmp$_52;
        if ((tmp$_47 = tmp$_50) != null) {
          var destination_8 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
          var tmp$_53;
          tmp$_53 = tmp$_47.iterator();
          while (tmp$_53.hasNext()) {
            var element_14 = tmp$_53.next();
            var tmp$_54;
            if (get_currentSeason() == null || Kotlin.equals(element_14.season, (tmp$_54 = get_currentSeason()) != null ? tmp$_54.id : null)) {
              destination_8.add_11rb$(element_14);
            }
          }
          tmp$_52 = destination_8;
        }
         else
          tmp$_52 = null;
        var classMatches_0 = tmp$_52;
        var tmp$_55;
        if (classMatches_0 != null) {
          var tmp$_56;
          var count_28 = 0;
          tmp$_56 = classMatches_0.iterator();
          while (tmp$_56.hasNext()) {
            var element_15 = tmp$_56.next();
            if (element_15.win) {
              count_28 = count_28 + 1 | 0;
            }
          }
          tmp$_55 = count_28;
        }
         else
          tmp$_55 = null;
        var wins_0 = (tmp$_48 = tmp$_55) != null ? tmp$_48 : 0;
        var tmp$_57;
        if (classMatches_0 != null) {
          var tmp$_58;
          var count_29 = 0;
          tmp$_58 = classMatches_0.iterator();
          while (tmp$_58.hasNext()) {
            var element_16 = tmp$_58.next();
            if (!element_16.win) {
              count_29 = count_29 + 1 | 0;
            }
          }
          tmp$_57 = count_29;
        }
         else
          tmp$_57 = null;
        var loses_0 = (tmp$_49 = tmp$_57) != null ? tmp$_49 : 0;
        tmp$_1.appendChild(UI_getInstance().createMatchResult_vux9f0$(wins_0, loses_0));
      }
      tmp$_1.appendChild(UI_getInstance().createMatchResult_vux9f0$(totalWins.v, totalLosses.v));
    }
  }
  function CardAttribute(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardAttribute_initFields() {
    CardAttribute_initFields = function () {
    };
    CardAttribute$STRENGTH_instance = new CardAttribute('STRENGTH', 0);
    CardAttribute$INTELLIGENCE_instance = new CardAttribute('INTELLIGENCE', 1);
    CardAttribute$WILLPOWER_instance = new CardAttribute('WILLPOWER', 2);
    CardAttribute$AGILITY_instance = new CardAttribute('AGILITY', 3);
    CardAttribute$ENDURANCE_instance = new CardAttribute('ENDURANCE', 4);
    CardAttribute$NEUTRAL_instance = new CardAttribute('NEUTRAL', 5);
    CardAttribute$DUAL_instance = new CardAttribute('DUAL', 6);
  }
  var CardAttribute$STRENGTH_instance;
  function CardAttribute$STRENGTH_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$STRENGTH_instance;
  }
  var CardAttribute$INTELLIGENCE_instance;
  function CardAttribute$INTELLIGENCE_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$INTELLIGENCE_instance;
  }
  var CardAttribute$WILLPOWER_instance;
  function CardAttribute$WILLPOWER_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$WILLPOWER_instance;
  }
  var CardAttribute$AGILITY_instance;
  function CardAttribute$AGILITY_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$AGILITY_instance;
  }
  var CardAttribute$ENDURANCE_instance;
  function CardAttribute$ENDURANCE_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$ENDURANCE_instance;
  }
  var CardAttribute$NEUTRAL_instance;
  function CardAttribute$NEUTRAL_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$NEUTRAL_instance;
  }
  var CardAttribute$DUAL_instance;
  function CardAttribute$DUAL_getInstance() {
    CardAttribute_initFields();
    return CardAttribute$DUAL_instance;
  }
  CardAttribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardAttribute',
    interfaces: [Enum]
  };
  function CardAttribute$values() {
    return [CardAttribute$STRENGTH_getInstance(), CardAttribute$INTELLIGENCE_getInstance(), CardAttribute$WILLPOWER_getInstance(), CardAttribute$AGILITY_getInstance(), CardAttribute$ENDURANCE_getInstance(), CardAttribute$NEUTRAL_getInstance(), CardAttribute$DUAL_getInstance()];
  }
  CardAttribute.values = CardAttribute$values;
  function CardAttribute$valueOf(name) {
    switch (name) {
      case 'STRENGTH':
        return CardAttribute$STRENGTH_getInstance();
      case 'INTELLIGENCE':
        return CardAttribute$INTELLIGENCE_getInstance();
      case 'WILLPOWER':
        return CardAttribute$WILLPOWER_getInstance();
      case 'AGILITY':
        return CardAttribute$AGILITY_getInstance();
      case 'ENDURANCE':
        return CardAttribute$ENDURANCE_getInstance();
      case 'NEUTRAL':
        return CardAttribute$NEUTRAL_getInstance();
      case 'DUAL':
        return CardAttribute$DUAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardAttribute.' + name);
    }
  }
  CardAttribute.valueOf_61zpoe$ = CardAttribute$valueOf;
  function CardSet(name, ordinal, title) {
    CardSet$Companion_getInstance();
    Enum.call(this);
    this.title = title;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.unknownSetName = '';
    this.db = this.name.toLowerCase();
  }
  function CardSet_initFields() {
    CardSet_initFields = function () {
    };
    CardSet$CORE_instance = new CardSet('CORE', 0, 'Core');
    CardSet$MADHOUSE_instance = new CardSet('MADHOUSE', 1, 'Madhouse Collection');
    CardSet$FALLOFTHEDARKBROTHERHOOD_instance = new CardSet('FALLOFTHEDARKBROTHERHOOD', 2, 'The Fall of the Dark Brotherhood');
    CardSet$TOKENS_instance = new CardSet('TOKENS', 3, 'Tokens');
    CardSet$UNKNOWN_instance = new CardSet('UNKNOWN', 4, 'Unknown');
  }
  var CardSet$CORE_instance;
  function CardSet$CORE_getInstance() {
    CardSet_initFields();
    return CardSet$CORE_instance;
  }
  var CardSet$MADHOUSE_instance;
  function CardSet$MADHOUSE_getInstance() {
    CardSet_initFields();
    return CardSet$MADHOUSE_instance;
  }
  var CardSet$FALLOFTHEDARKBROTHERHOOD_instance;
  function CardSet$FALLOFTHEDARKBROTHERHOOD_getInstance() {
    CardSet_initFields();
    return CardSet$FALLOFTHEDARKBROTHERHOOD_instance;
  }
  var CardSet$TOKENS_instance;
  function CardSet$TOKENS_getInstance() {
    CardSet_initFields();
    return CardSet$TOKENS_instance;
  }
  var CardSet$UNKNOWN_instance;
  function CardSet$UNKNOWN_getInstance() {
    CardSet_initFields();
    return CardSet$UNKNOWN_instance;
  }
  CardSet.prototype.toString = function () {
    var tmp$;
    var $receiver = this.name;
    return (tmp$ = this !== CardSet$UNKNOWN_getInstance() ? $receiver : null) != null ? tmp$ : this.unknownSetName;
  };
  function CardSet$Companion() {
    CardSet$Companion_instance = this;
  }
  CardSet$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = CardSet$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? CardSet$valueOf(name) : CardSet$UNKNOWN_getInstance();
  };
  CardSet$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardSet$Companion_instance = null;
  function CardSet$Companion_getInstance() {
    if (CardSet$Companion_instance === null) {
      new CardSet$Companion();
    }
    return CardSet$Companion_instance;
  }
  CardSet.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardSet',
    interfaces: [Enum]
  };
  function CardSet$values() {
    return [CardSet$CORE_getInstance(), CardSet$MADHOUSE_getInstance(), CardSet$FALLOFTHEDARKBROTHERHOOD_getInstance(), CardSet$TOKENS_getInstance(), CardSet$UNKNOWN_getInstance()];
  }
  CardSet.values = CardSet$values;
  function CardSet$valueOf(name) {
    switch (name) {
      case 'CORE':
        return CardSet$CORE_getInstance();
      case 'MADHOUSE':
        return CardSet$MADHOUSE_getInstance();
      case 'FALLOFTHEDARKBROTHERHOOD':
        return CardSet$FALLOFTHEDARKBROTHERHOOD_getInstance();
      case 'TOKENS':
        return CardSet$TOKENS_getInstance();
      case 'UNKNOWN':
        return CardSet$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardSet.' + name);
    }
  }
  CardSet.valueOf_61zpoe$ = CardSet$valueOf;
  function CardRarity(name, ordinal, soulCost) {
    CardRarity$Companion_getInstance();
    Enum.call(this);
    this.soulCost = soulCost;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardRarity_initFields() {
    CardRarity_initFields = function () {
    };
    CardRarity$COMMON_instance = new CardRarity('COMMON', 0, 50);
    CardRarity$RARE_instance = new CardRarity('RARE', 1, 100);
    CardRarity$EPIC_instance = new CardRarity('EPIC', 2, 400);
    CardRarity$LEGENDARY_instance = new CardRarity('LEGENDARY', 3, 1200);
    CardRarity$UNKNOWN_instance = new CardRarity('UNKNOWN', 4, 0);
  }
  var CardRarity$COMMON_instance;
  function CardRarity$COMMON_getInstance() {
    CardRarity_initFields();
    return CardRarity$COMMON_instance;
  }
  var CardRarity$RARE_instance;
  function CardRarity$RARE_getInstance() {
    CardRarity_initFields();
    return CardRarity$RARE_instance;
  }
  var CardRarity$EPIC_instance;
  function CardRarity$EPIC_getInstance() {
    CardRarity_initFields();
    return CardRarity$EPIC_instance;
  }
  var CardRarity$LEGENDARY_instance;
  function CardRarity$LEGENDARY_getInstance() {
    CardRarity_initFields();
    return CardRarity$LEGENDARY_instance;
  }
  var CardRarity$UNKNOWN_instance;
  function CardRarity$UNKNOWN_getInstance() {
    CardRarity_initFields();
    return CardRarity$UNKNOWN_instance;
  }
  function CardRarity$Companion() {
    CardRarity$Companion_instance = this;
  }
  CardRarity$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = CardRarity$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? CardRarity$valueOf(name) : CardRarity$UNKNOWN_getInstance();
  };
  CardRarity$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardRarity$Companion_instance = null;
  function CardRarity$Companion_getInstance() {
    if (CardRarity$Companion_instance === null) {
      new CardRarity$Companion();
    }
    return CardRarity$Companion_instance;
  }
  CardRarity.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardRarity',
    interfaces: [Enum]
  };
  function CardRarity$values() {
    return [CardRarity$COMMON_getInstance(), CardRarity$RARE_getInstance(), CardRarity$EPIC_getInstance(), CardRarity$LEGENDARY_getInstance(), CardRarity$UNKNOWN_getInstance()];
  }
  CardRarity.values = CardRarity$values;
  function CardRarity$valueOf(name) {
    switch (name) {
      case 'COMMON':
        return CardRarity$COMMON_getInstance();
      case 'RARE':
        return CardRarity$RARE_getInstance();
      case 'EPIC':
        return CardRarity$EPIC_getInstance();
      case 'LEGENDARY':
        return CardRarity$LEGENDARY_getInstance();
      case 'UNKNOWN':
        return CardRarity$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardRarity.' + name);
    }
  }
  CardRarity.valueOf_61zpoe$ = CardRarity$valueOf;
  function CardType(name, ordinal) {
    CardType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardType_initFields() {
    CardType_initFields = function () {
    };
    CardType$ACTION_instance = new CardType('ACTION', 0);
    CardType$CREATURE_instance = new CardType('CREATURE', 1);
    CardType$ITEM_instance = new CardType('ITEM', 2);
    CardType$SUPPORT_instance = new CardType('SUPPORT', 3);
    CardType$UNKNOWN_instance = new CardType('UNKNOWN', 4);
  }
  var CardType$ACTION_instance;
  function CardType$ACTION_getInstance() {
    CardType_initFields();
    return CardType$ACTION_instance;
  }
  var CardType$CREATURE_instance;
  function CardType$CREATURE_getInstance() {
    CardType_initFields();
    return CardType$CREATURE_instance;
  }
  var CardType$ITEM_instance;
  function CardType$ITEM_getInstance() {
    CardType_initFields();
    return CardType$ITEM_instance;
  }
  var CardType$SUPPORT_instance;
  function CardType$SUPPORT_getInstance() {
    CardType_initFields();
    return CardType$SUPPORT_instance;
  }
  var CardType$UNKNOWN_instance;
  function CardType$UNKNOWN_getInstance() {
    CardType_initFields();
    return CardType$UNKNOWN_instance;
  }
  function CardType$Companion() {
    CardType$Companion_instance = this;
  }
  CardType$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = CardType$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? CardType$valueOf(name) : CardType$UNKNOWN_getInstance();
  };
  CardType$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardType$Companion_instance = null;
  function CardType$Companion_getInstance() {
    if (CardType$Companion_instance === null) {
      new CardType$Companion();
    }
    return CardType$Companion_instance;
  }
  CardType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardType',
    interfaces: [Enum]
  };
  function CardType$values() {
    return [CardType$ACTION_getInstance(), CardType$CREATURE_getInstance(), CardType$ITEM_getInstance(), CardType$SUPPORT_getInstance(), CardType$UNKNOWN_getInstance()];
  }
  CardType.values = CardType$values;
  function CardType$valueOf(name) {
    switch (name) {
      case 'ACTION':
        return CardType$ACTION_getInstance();
      case 'CREATURE':
        return CardType$CREATURE_getInstance();
      case 'ITEM':
        return CardType$ITEM_getInstance();
      case 'SUPPORT':
        return CardType$SUPPORT_getInstance();
      case 'UNKNOWN':
        return CardType$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardType.' + name);
    }
  }
  CardType.valueOf_61zpoe$ = CardType$valueOf;
  function CardRace(name, ordinal, desc) {
    CardRace$Companion_getInstance();
    Enum.call(this);
    this.desc = desc;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardRace_initFields() {
    CardRace_initFields = function () {
    };
    CardRace$ARGONIAN_instance = new CardRace('ARGONIAN', 0, 'The Argonians of Black Marsh are possessed of a cool intellect and are well-versed in ' + 'stealth and the use of blades. They often act as the scouts and skirmishers.');
    CardRace$BRETON_instance = new CardRace('BRETON', 1, 'Flamboyant, intelligent, and resourceful, the Bretons of High Rock are renowned craftsmen, ' + 'shrewd merchants, gallant cavaliers, and inventive wizards.');
    CardRace$DARK_ELF_instance = new CardRace('DARK_ELF', 2, 'The Dark Elf homeland of Morrowind has been invaded many times over the millennia. ' + 'This history of conflict has transformed the Dunmer into hardened warriors.');
    CardRace$HIGH_ELF_instance = new CardRace('HIGH_ELF', 3, 'The Altmer are one of the longest-lived and most-intelligent races in Tamriel, ' + 'which grants them a natural affinity for spells and magic.');
    CardRace$IMPERIAL_instance = new CardRace('IMPERIAL', 4, 'The Imperial natives of Cyrodiil have proven to be shrewd tacticians and diplomats.');
    CardRace$KHAJIIT_instance = new CardRace('KHAJIIT', 5, 'Khajiit are quick and agile, making them some of the most adept thieves in Tamriel.');
    CardRace$NORD_instance = new CardRace('NORD', 6, 'Hailing from the inhospitable mountains of Skyrim, Nords are fearsome and hardy warriors.');
    CardRace$ORC_instance = new CardRace('ORC', 7, 'The Orcs of the Wrothgarian and Dragontail Mountains are renowed as both craftsmen and berserkers.');
    CardRace$REDGUARD_instance = new CardRace('REDGUARD', 8, "The Redguard of Hammerfell are Tamriel's most talented and resourceful warriors.");
    CardRace$WOOD_ELF_instance = new CardRace('WOOD_ELF', 9, 'The clanfolk of the Valenwood are the finest archers in Tamriel. Wood Elves excel at ' + 'hunting and dispatching the unwary.');
    CardRace$ASH_CREATURE_instance = new CardRace('ASH_CREATURE', 10, '');
    CardRace$BEAST_instance = new CardRace('BEAST', 11, '');
    CardRace$CENTAUR_instance = new CardRace('CENTAUR', 12, '');
    CardRace$CHAURUS_instance = new CardRace('CHAURUS', 13, '');
    CardRace$DAEDRA_instance = new CardRace('DAEDRA', 14, '');
    CardRace$DEFENSE_instance = new CardRace('DEFENSE', 15, '');
    CardRace$DRAGON_instance = new CardRace('DRAGON', 16, '');
    CardRace$DREUGH_instance = new CardRace('DREUGH', 17, '');
    CardRace$DWEMER_instance = new CardRace('DWEMER', 18, '');
    CardRace$FISH_instance = new CardRace('FISH', 19, '');
    CardRace$GIANT_instance = new CardRace('GIANT', 20, '');
    CardRace$GOBLIN_instance = new CardRace('GOBLIN', 21, '');
    CardRace$HARPY_instance = new CardRace('HARPY', 22, '');
    CardRace$IMP_instance = new CardRace('IMP', 23, '');
    CardRace$KWAMA_instance = new CardRace('KWAMA', 24, '');
    CardRace$LURCHER_instance = new CardRace('LURCHER', 25, '');
    CardRace$LYCANTHROPE_instance = new CardRace('LYCANTHROPE', 26, '');
    CardRace$MAMMOTH_instance = new CardRace('MAMMOTH', 27, '');
    CardRace$MANTIKORA_instance = new CardRace('MANTIKORA', 28, '');
    CardRace$MINOTAUR_instance = new CardRace('MINOTAUR', 29, '');
    CardRace$MUDCRAB_instance = new CardRace('MUDCRAB', 30, '');
    CardRace$MUMMY_instance = new CardRace('MUMMY', 31, '');
    CardRace$NEREID_instance = new CardRace('NEREID', 32, '');
    CardRace$OGRE_instance = new CardRace('OGRE', 33, '');
    CardRace$REPTILE_instance = new CardRace('REPTILE', 34, '');
    CardRace$REACHMAN_instance = new CardRace('REACHMAN', 35, '');
    CardRace$SKELETON_instance = new CardRace('SKELETON', 36, '');
    CardRace$SPIRIT_instance = new CardRace('SPIRIT', 37, '');
    CardRace$SPIDER_instance = new CardRace('SPIDER', 38, '');
    CardRace$SPRIGGAN_instance = new CardRace('SPRIGGAN', 39, '');
    CardRace$TROLL_instance = new CardRace('TROLL', 40, '');
    CardRace$VAMPIRE_instance = new CardRace('VAMPIRE', 41, '');
    CardRace$WOLF_instance = new CardRace('WOLF', 42, '');
    CardRace$WAMASU_instance = new CardRace('WAMASU', 43, '');
    CardRace$WRAITH_instance = new CardRace('WRAITH', 44, '');
    CardRace$UNKNOWN_instance = new CardRace('UNKNOWN', 45, '');
    CardRace$NONE_instance = new CardRace('NONE', 46, '');
  }
  var CardRace$ARGONIAN_instance;
  function CardRace$ARGONIAN_getInstance() {
    CardRace_initFields();
    return CardRace$ARGONIAN_instance;
  }
  var CardRace$BRETON_instance;
  function CardRace$BRETON_getInstance() {
    CardRace_initFields();
    return CardRace$BRETON_instance;
  }
  var CardRace$DARK_ELF_instance;
  function CardRace$DARK_ELF_getInstance() {
    CardRace_initFields();
    return CardRace$DARK_ELF_instance;
  }
  var CardRace$HIGH_ELF_instance;
  function CardRace$HIGH_ELF_getInstance() {
    CardRace_initFields();
    return CardRace$HIGH_ELF_instance;
  }
  var CardRace$IMPERIAL_instance;
  function CardRace$IMPERIAL_getInstance() {
    CardRace_initFields();
    return CardRace$IMPERIAL_instance;
  }
  var CardRace$KHAJIIT_instance;
  function CardRace$KHAJIIT_getInstance() {
    CardRace_initFields();
    return CardRace$KHAJIIT_instance;
  }
  var CardRace$NORD_instance;
  function CardRace$NORD_getInstance() {
    CardRace_initFields();
    return CardRace$NORD_instance;
  }
  var CardRace$ORC_instance;
  function CardRace$ORC_getInstance() {
    CardRace_initFields();
    return CardRace$ORC_instance;
  }
  var CardRace$REDGUARD_instance;
  function CardRace$REDGUARD_getInstance() {
    CardRace_initFields();
    return CardRace$REDGUARD_instance;
  }
  var CardRace$WOOD_ELF_instance;
  function CardRace$WOOD_ELF_getInstance() {
    CardRace_initFields();
    return CardRace$WOOD_ELF_instance;
  }
  var CardRace$ASH_CREATURE_instance;
  function CardRace$ASH_CREATURE_getInstance() {
    CardRace_initFields();
    return CardRace$ASH_CREATURE_instance;
  }
  var CardRace$BEAST_instance;
  function CardRace$BEAST_getInstance() {
    CardRace_initFields();
    return CardRace$BEAST_instance;
  }
  var CardRace$CENTAUR_instance;
  function CardRace$CENTAUR_getInstance() {
    CardRace_initFields();
    return CardRace$CENTAUR_instance;
  }
  var CardRace$CHAURUS_instance;
  function CardRace$CHAURUS_getInstance() {
    CardRace_initFields();
    return CardRace$CHAURUS_instance;
  }
  var CardRace$DAEDRA_instance;
  function CardRace$DAEDRA_getInstance() {
    CardRace_initFields();
    return CardRace$DAEDRA_instance;
  }
  var CardRace$DEFENSE_instance;
  function CardRace$DEFENSE_getInstance() {
    CardRace_initFields();
    return CardRace$DEFENSE_instance;
  }
  var CardRace$DRAGON_instance;
  function CardRace$DRAGON_getInstance() {
    CardRace_initFields();
    return CardRace$DRAGON_instance;
  }
  var CardRace$DREUGH_instance;
  function CardRace$DREUGH_getInstance() {
    CardRace_initFields();
    return CardRace$DREUGH_instance;
  }
  var CardRace$DWEMER_instance;
  function CardRace$DWEMER_getInstance() {
    CardRace_initFields();
    return CardRace$DWEMER_instance;
  }
  var CardRace$FISH_instance;
  function CardRace$FISH_getInstance() {
    CardRace_initFields();
    return CardRace$FISH_instance;
  }
  var CardRace$GIANT_instance;
  function CardRace$GIANT_getInstance() {
    CardRace_initFields();
    return CardRace$GIANT_instance;
  }
  var CardRace$GOBLIN_instance;
  function CardRace$GOBLIN_getInstance() {
    CardRace_initFields();
    return CardRace$GOBLIN_instance;
  }
  var CardRace$HARPY_instance;
  function CardRace$HARPY_getInstance() {
    CardRace_initFields();
    return CardRace$HARPY_instance;
  }
  var CardRace$IMP_instance;
  function CardRace$IMP_getInstance() {
    CardRace_initFields();
    return CardRace$IMP_instance;
  }
  var CardRace$KWAMA_instance;
  function CardRace$KWAMA_getInstance() {
    CardRace_initFields();
    return CardRace$KWAMA_instance;
  }
  var CardRace$LURCHER_instance;
  function CardRace$LURCHER_getInstance() {
    CardRace_initFields();
    return CardRace$LURCHER_instance;
  }
  var CardRace$LYCANTHROPE_instance;
  function CardRace$LYCANTHROPE_getInstance() {
    CardRace_initFields();
    return CardRace$LYCANTHROPE_instance;
  }
  var CardRace$MAMMOTH_instance;
  function CardRace$MAMMOTH_getInstance() {
    CardRace_initFields();
    return CardRace$MAMMOTH_instance;
  }
  var CardRace$MANTIKORA_instance;
  function CardRace$MANTIKORA_getInstance() {
    CardRace_initFields();
    return CardRace$MANTIKORA_instance;
  }
  var CardRace$MINOTAUR_instance;
  function CardRace$MINOTAUR_getInstance() {
    CardRace_initFields();
    return CardRace$MINOTAUR_instance;
  }
  var CardRace$MUDCRAB_instance;
  function CardRace$MUDCRAB_getInstance() {
    CardRace_initFields();
    return CardRace$MUDCRAB_instance;
  }
  var CardRace$MUMMY_instance;
  function CardRace$MUMMY_getInstance() {
    CardRace_initFields();
    return CardRace$MUMMY_instance;
  }
  var CardRace$NEREID_instance;
  function CardRace$NEREID_getInstance() {
    CardRace_initFields();
    return CardRace$NEREID_instance;
  }
  var CardRace$OGRE_instance;
  function CardRace$OGRE_getInstance() {
    CardRace_initFields();
    return CardRace$OGRE_instance;
  }
  var CardRace$REPTILE_instance;
  function CardRace$REPTILE_getInstance() {
    CardRace_initFields();
    return CardRace$REPTILE_instance;
  }
  var CardRace$REACHMAN_instance;
  function CardRace$REACHMAN_getInstance() {
    CardRace_initFields();
    return CardRace$REACHMAN_instance;
  }
  var CardRace$SKELETON_instance;
  function CardRace$SKELETON_getInstance() {
    CardRace_initFields();
    return CardRace$SKELETON_instance;
  }
  var CardRace$SPIRIT_instance;
  function CardRace$SPIRIT_getInstance() {
    CardRace_initFields();
    return CardRace$SPIRIT_instance;
  }
  var CardRace$SPIDER_instance;
  function CardRace$SPIDER_getInstance() {
    CardRace_initFields();
    return CardRace$SPIDER_instance;
  }
  var CardRace$SPRIGGAN_instance;
  function CardRace$SPRIGGAN_getInstance() {
    CardRace_initFields();
    return CardRace$SPRIGGAN_instance;
  }
  var CardRace$TROLL_instance;
  function CardRace$TROLL_getInstance() {
    CardRace_initFields();
    return CardRace$TROLL_instance;
  }
  var CardRace$VAMPIRE_instance;
  function CardRace$VAMPIRE_getInstance() {
    CardRace_initFields();
    return CardRace$VAMPIRE_instance;
  }
  var CardRace$WOLF_instance;
  function CardRace$WOLF_getInstance() {
    CardRace_initFields();
    return CardRace$WOLF_instance;
  }
  var CardRace$WAMASU_instance;
  function CardRace$WAMASU_getInstance() {
    CardRace_initFields();
    return CardRace$WAMASU_instance;
  }
  var CardRace$WRAITH_instance;
  function CardRace$WRAITH_getInstance() {
    CardRace_initFields();
    return CardRace$WRAITH_instance;
  }
  var CardRace$UNKNOWN_instance;
  function CardRace$UNKNOWN_getInstance() {
    CardRace_initFields();
    return CardRace$UNKNOWN_instance;
  }
  var CardRace$NONE_instance;
  function CardRace$NONE_getInstance() {
    CardRace_initFields();
    return CardRace$NONE_instance;
  }
  function CardRace$Companion() {
    CardRace$Companion_instance = this;
  }
  CardRace$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$_0;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_0 = value) ? tmp$_0 : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var tmp$;
    var tmp$_1;
    if (Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_1 = value) ? tmp$_1 : Kotlin.throwCCE()).toString().length === 0)
      tmp$ = CardRace$NONE_getInstance();
    else {
      var $receiver = CardRace$values();
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var item = $receiver[tmp$_2];
        destination.add_11rb$(item.name);
      }
      tmp$ = destination.contains_11rb$(name) ? CardRace$valueOf(name) : CardRace$UNKNOWN_getInstance();
    }
    return tmp$;
  };
  CardRace$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardRace$Companion_instance = null;
  function CardRace$Companion_getInstance() {
    if (CardRace$Companion_instance === null) {
      new CardRace$Companion();
    }
    return CardRace$Companion_instance;
  }
  CardRace.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardRace',
    interfaces: [Enum]
  };
  function CardRace$values() {
    return [CardRace$ARGONIAN_getInstance(), CardRace$BRETON_getInstance(), CardRace$DARK_ELF_getInstance(), CardRace$HIGH_ELF_getInstance(), CardRace$IMPERIAL_getInstance(), CardRace$KHAJIIT_getInstance(), CardRace$NORD_getInstance(), CardRace$ORC_getInstance(), CardRace$REDGUARD_getInstance(), CardRace$WOOD_ELF_getInstance(), CardRace$ASH_CREATURE_getInstance(), CardRace$BEAST_getInstance(), CardRace$CENTAUR_getInstance(), CardRace$CHAURUS_getInstance(), CardRace$DAEDRA_getInstance(), CardRace$DEFENSE_getInstance(), CardRace$DRAGON_getInstance(), CardRace$DREUGH_getInstance(), CardRace$DWEMER_getInstance(), CardRace$FISH_getInstance(), CardRace$GIANT_getInstance(), CardRace$GOBLIN_getInstance(), CardRace$HARPY_getInstance(), CardRace$IMP_getInstance(), CardRace$KWAMA_getInstance(), CardRace$LURCHER_getInstance(), CardRace$LYCANTHROPE_getInstance(), CardRace$MAMMOTH_getInstance(), CardRace$MANTIKORA_getInstance(), CardRace$MINOTAUR_getInstance(), CardRace$MUDCRAB_getInstance(), CardRace$MUMMY_getInstance(), CardRace$NEREID_getInstance(), CardRace$OGRE_getInstance(), CardRace$REPTILE_getInstance(), CardRace$REACHMAN_getInstance(), CardRace$SKELETON_getInstance(), CardRace$SPIRIT_getInstance(), CardRace$SPIDER_getInstance(), CardRace$SPRIGGAN_getInstance(), CardRace$TROLL_getInstance(), CardRace$VAMPIRE_getInstance(), CardRace$WOLF_getInstance(), CardRace$WAMASU_getInstance(), CardRace$WRAITH_getInstance(), CardRace$UNKNOWN_getInstance(), CardRace$NONE_getInstance()];
  }
  CardRace.values = CardRace$values;
  function CardRace$valueOf(name) {
    switch (name) {
      case 'ARGONIAN':
        return CardRace$ARGONIAN_getInstance();
      case 'BRETON':
        return CardRace$BRETON_getInstance();
      case 'DARK_ELF':
        return CardRace$DARK_ELF_getInstance();
      case 'HIGH_ELF':
        return CardRace$HIGH_ELF_getInstance();
      case 'IMPERIAL':
        return CardRace$IMPERIAL_getInstance();
      case 'KHAJIIT':
        return CardRace$KHAJIIT_getInstance();
      case 'NORD':
        return CardRace$NORD_getInstance();
      case 'ORC':
        return CardRace$ORC_getInstance();
      case 'REDGUARD':
        return CardRace$REDGUARD_getInstance();
      case 'WOOD_ELF':
        return CardRace$WOOD_ELF_getInstance();
      case 'ASH_CREATURE':
        return CardRace$ASH_CREATURE_getInstance();
      case 'BEAST':
        return CardRace$BEAST_getInstance();
      case 'CENTAUR':
        return CardRace$CENTAUR_getInstance();
      case 'CHAURUS':
        return CardRace$CHAURUS_getInstance();
      case 'DAEDRA':
        return CardRace$DAEDRA_getInstance();
      case 'DEFENSE':
        return CardRace$DEFENSE_getInstance();
      case 'DRAGON':
        return CardRace$DRAGON_getInstance();
      case 'DREUGH':
        return CardRace$DREUGH_getInstance();
      case 'DWEMER':
        return CardRace$DWEMER_getInstance();
      case 'FISH':
        return CardRace$FISH_getInstance();
      case 'GIANT':
        return CardRace$GIANT_getInstance();
      case 'GOBLIN':
        return CardRace$GOBLIN_getInstance();
      case 'HARPY':
        return CardRace$HARPY_getInstance();
      case 'IMP':
        return CardRace$IMP_getInstance();
      case 'KWAMA':
        return CardRace$KWAMA_getInstance();
      case 'LURCHER':
        return CardRace$LURCHER_getInstance();
      case 'LYCANTHROPE':
        return CardRace$LYCANTHROPE_getInstance();
      case 'MAMMOTH':
        return CardRace$MAMMOTH_getInstance();
      case 'MANTIKORA':
        return CardRace$MANTIKORA_getInstance();
      case 'MINOTAUR':
        return CardRace$MINOTAUR_getInstance();
      case 'MUDCRAB':
        return CardRace$MUDCRAB_getInstance();
      case 'MUMMY':
        return CardRace$MUMMY_getInstance();
      case 'NEREID':
        return CardRace$NEREID_getInstance();
      case 'OGRE':
        return CardRace$OGRE_getInstance();
      case 'REPTILE':
        return CardRace$REPTILE_getInstance();
      case 'REACHMAN':
        return CardRace$REACHMAN_getInstance();
      case 'SKELETON':
        return CardRace$SKELETON_getInstance();
      case 'SPIRIT':
        return CardRace$SPIRIT_getInstance();
      case 'SPIDER':
        return CardRace$SPIDER_getInstance();
      case 'SPRIGGAN':
        return CardRace$SPRIGGAN_getInstance();
      case 'TROLL':
        return CardRace$TROLL_getInstance();
      case 'VAMPIRE':
        return CardRace$VAMPIRE_getInstance();
      case 'WOLF':
        return CardRace$WOLF_getInstance();
      case 'WAMASU':
        return CardRace$WAMASU_getInstance();
      case 'WRAITH':
        return CardRace$WRAITH_getInstance();
      case 'UNKNOWN':
        return CardRace$UNKNOWN_getInstance();
      case 'NONE':
        return CardRace$NONE_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardRace.' + name);
    }
  }
  CardRace.valueOf_61zpoe$ = CardRace$valueOf;
  function CardKeyword(name, ordinal) {
    CardKeyword$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardKeyword_initFields() {
    CardKeyword_initFields = function () {
    };
    CardKeyword$ACTIVATE_instance = new CardKeyword('ACTIVATE', 0);
    CardKeyword$BREAKTHROUGH_instance = new CardKeyword('BREAKTHROUGH', 1);
    CardKeyword$CHARGE_instance = new CardKeyword('CHARGE', 2);
    CardKeyword$COVER_instance = new CardKeyword('COVER', 3);
    CardKeyword$DRAIN_instance = new CardKeyword('DRAIN', 4);
    CardKeyword$EVOLVES_instance = new CardKeyword('EVOLVES', 5);
    CardKeyword$GUARD_instance = new CardKeyword('GUARD', 6);
    CardKeyword$LAST_GASP_instance = new CardKeyword('LAST_GASP', 7);
    CardKeyword$LETHAL_instance = new CardKeyword('LETHAL', 8);
    CardKeyword$PILFER_instance = new CardKeyword('PILFER', 9);
    CardKeyword$PROPHECY_instance = new CardKeyword('PROPHECY', 10);
    CardKeyword$REGENERATE_instance = new CardKeyword('REGENERATE', 11);
    CardKeyword$SHACKLE_instance = new CardKeyword('SHACKLE', 12);
    CardKeyword$SILENCE_instance = new CardKeyword('SILENCE', 13);
    CardKeyword$SUMMON_instance = new CardKeyword('SUMMON', 14);
    CardKeyword$WARD_instance = new CardKeyword('WARD', 15);
    CardKeyword$UNKNOWN_instance = new CardKeyword('UNKNOWN', 16);
  }
  var CardKeyword$ACTIVATE_instance;
  function CardKeyword$ACTIVATE_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$ACTIVATE_instance;
  }
  var CardKeyword$BREAKTHROUGH_instance;
  function CardKeyword$BREAKTHROUGH_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$BREAKTHROUGH_instance;
  }
  var CardKeyword$CHARGE_instance;
  function CardKeyword$CHARGE_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$CHARGE_instance;
  }
  var CardKeyword$COVER_instance;
  function CardKeyword$COVER_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$COVER_instance;
  }
  var CardKeyword$DRAIN_instance;
  function CardKeyword$DRAIN_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$DRAIN_instance;
  }
  var CardKeyword$EVOLVES_instance;
  function CardKeyword$EVOLVES_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$EVOLVES_instance;
  }
  var CardKeyword$GUARD_instance;
  function CardKeyword$GUARD_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$GUARD_instance;
  }
  var CardKeyword$LAST_GASP_instance;
  function CardKeyword$LAST_GASP_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$LAST_GASP_instance;
  }
  var CardKeyword$LETHAL_instance;
  function CardKeyword$LETHAL_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$LETHAL_instance;
  }
  var CardKeyword$PILFER_instance;
  function CardKeyword$PILFER_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$PILFER_instance;
  }
  var CardKeyword$PROPHECY_instance;
  function CardKeyword$PROPHECY_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$PROPHECY_instance;
  }
  var CardKeyword$REGENERATE_instance;
  function CardKeyword$REGENERATE_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$REGENERATE_instance;
  }
  var CardKeyword$SHACKLE_instance;
  function CardKeyword$SHACKLE_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$SHACKLE_instance;
  }
  var CardKeyword$SILENCE_instance;
  function CardKeyword$SILENCE_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$SILENCE_instance;
  }
  var CardKeyword$SUMMON_instance;
  function CardKeyword$SUMMON_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$SUMMON_instance;
  }
  var CardKeyword$WARD_instance;
  function CardKeyword$WARD_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$WARD_instance;
  }
  var CardKeyword$UNKNOWN_instance;
  function CardKeyword$UNKNOWN_getInstance() {
    CardKeyword_initFields();
    return CardKeyword$UNKNOWN_instance;
  }
  function CardKeyword$Companion() {
    CardKeyword$Companion_instance = this;
  }
  CardKeyword$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = CardKeyword$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? CardKeyword$valueOf(name) : CardKeyword$UNKNOWN_getInstance();
  };
  CardKeyword$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardKeyword$Companion_instance = null;
  function CardKeyword$Companion_getInstance() {
    if (CardKeyword$Companion_instance === null) {
      new CardKeyword$Companion();
    }
    return CardKeyword$Companion_instance;
  }
  CardKeyword.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardKeyword',
    interfaces: [Enum]
  };
  function CardKeyword$values() {
    return [CardKeyword$ACTIVATE_getInstance(), CardKeyword$BREAKTHROUGH_getInstance(), CardKeyword$CHARGE_getInstance(), CardKeyword$COVER_getInstance(), CardKeyword$DRAIN_getInstance(), CardKeyword$EVOLVES_getInstance(), CardKeyword$GUARD_getInstance(), CardKeyword$LAST_GASP_getInstance(), CardKeyword$LETHAL_getInstance(), CardKeyword$PILFER_getInstance(), CardKeyword$PROPHECY_getInstance(), CardKeyword$REGENERATE_getInstance(), CardKeyword$SHACKLE_getInstance(), CardKeyword$SILENCE_getInstance(), CardKeyword$SUMMON_getInstance(), CardKeyword$WARD_getInstance(), CardKeyword$UNKNOWN_getInstance()];
  }
  CardKeyword.values = CardKeyword$values;
  function CardKeyword$valueOf(name) {
    switch (name) {
      case 'ACTIVATE':
        return CardKeyword$ACTIVATE_getInstance();
      case 'BREAKTHROUGH':
        return CardKeyword$BREAKTHROUGH_getInstance();
      case 'CHARGE':
        return CardKeyword$CHARGE_getInstance();
      case 'COVER':
        return CardKeyword$COVER_getInstance();
      case 'DRAIN':
        return CardKeyword$DRAIN_getInstance();
      case 'EVOLVES':
        return CardKeyword$EVOLVES_getInstance();
      case 'GUARD':
        return CardKeyword$GUARD_getInstance();
      case 'LAST_GASP':
        return CardKeyword$LAST_GASP_getInstance();
      case 'LETHAL':
        return CardKeyword$LETHAL_getInstance();
      case 'PILFER':
        return CardKeyword$PILFER_getInstance();
      case 'PROPHECY':
        return CardKeyword$PROPHECY_getInstance();
      case 'REGENERATE':
        return CardKeyword$REGENERATE_getInstance();
      case 'SHACKLE':
        return CardKeyword$SHACKLE_getInstance();
      case 'SILENCE':
        return CardKeyword$SILENCE_getInstance();
      case 'SUMMON':
        return CardKeyword$SUMMON_getInstance();
      case 'WARD':
        return CardKeyword$WARD_getInstance();
      case 'UNKNOWN':
        return CardKeyword$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardKeyword.' + name);
    }
  }
  CardKeyword.valueOf_61zpoe$ = CardKeyword$valueOf;
  function CardArenaTier(name, ordinal, value) {
    CardArenaTier$Companion_getInstance();
    if (value === void 0)
      value = 0;
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardArenaTier_initFields() {
    CardArenaTier_initFields = function () {
    };
    CardArenaTier$TERRIBLE_instance = new CardArenaTier('TERRIBLE', 0, 10);
    CardArenaTier$POOR_instance = new CardArenaTier('POOR', 1, 20);
    CardArenaTier$AVERAGE_instance = new CardArenaTier('AVERAGE', 2, 30);
    CardArenaTier$GOOD_instance = new CardArenaTier('GOOD', 3, 50);
    CardArenaTier$EXCELLENT_instance = new CardArenaTier('EXCELLENT', 4, 70);
    CardArenaTier$INSANE_instance = new CardArenaTier('INSANE', 5, 90);
    CardArenaTier$UNKNOWN_instance = new CardArenaTier('UNKNOWN', 6);
    CardArenaTier$NONE_instance = new CardArenaTier('NONE', 7);
  }
  var CardArenaTier$TERRIBLE_instance;
  function CardArenaTier$TERRIBLE_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$TERRIBLE_instance;
  }
  var CardArenaTier$POOR_instance;
  function CardArenaTier$POOR_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$POOR_instance;
  }
  var CardArenaTier$AVERAGE_instance;
  function CardArenaTier$AVERAGE_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$AVERAGE_instance;
  }
  var CardArenaTier$GOOD_instance;
  function CardArenaTier$GOOD_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$GOOD_instance;
  }
  var CardArenaTier$EXCELLENT_instance;
  function CardArenaTier$EXCELLENT_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$EXCELLENT_instance;
  }
  var CardArenaTier$INSANE_instance;
  function CardArenaTier$INSANE_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$INSANE_instance;
  }
  var CardArenaTier$UNKNOWN_instance;
  function CardArenaTier$UNKNOWN_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$UNKNOWN_instance;
  }
  var CardArenaTier$NONE_instance;
  function CardArenaTier$NONE_getInstance() {
    CardArenaTier_initFields();
    return CardArenaTier$NONE_instance;
  }
  function CardArenaTier$Companion() {
    CardArenaTier$Companion_instance = this;
  }
  CardArenaTier$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = CardArenaTier$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? CardArenaTier$valueOf(name) : CardArenaTier$UNKNOWN_getInstance();
  };
  CardArenaTier$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardArenaTier$Companion_instance = null;
  function CardArenaTier$Companion_getInstance() {
    if (CardArenaTier$Companion_instance === null) {
      new CardArenaTier$Companion();
    }
    return CardArenaTier$Companion_instance;
  }
  CardArenaTier.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardArenaTier',
    interfaces: [Enum]
  };
  function CardArenaTier$values() {
    return [CardArenaTier$TERRIBLE_getInstance(), CardArenaTier$POOR_getInstance(), CardArenaTier$AVERAGE_getInstance(), CardArenaTier$GOOD_getInstance(), CardArenaTier$EXCELLENT_getInstance(), CardArenaTier$INSANE_getInstance(), CardArenaTier$UNKNOWN_getInstance(), CardArenaTier$NONE_getInstance()];
  }
  CardArenaTier.values = CardArenaTier$values;
  function CardArenaTier$valueOf(name) {
    switch (name) {
      case 'TERRIBLE':
        return CardArenaTier$TERRIBLE_getInstance();
      case 'POOR':
        return CardArenaTier$POOR_getInstance();
      case 'AVERAGE':
        return CardArenaTier$AVERAGE_getInstance();
      case 'GOOD':
        return CardArenaTier$GOOD_getInstance();
      case 'EXCELLENT':
        return CardArenaTier$EXCELLENT_getInstance();
      case 'INSANE':
        return CardArenaTier$INSANE_getInstance();
      case 'UNKNOWN':
        return CardArenaTier$UNKNOWN_getInstance();
      case 'NONE':
        return CardArenaTier$NONE_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardArenaTier.' + name);
    }
  }
  CardArenaTier.valueOf_61zpoe$ = CardArenaTier$valueOf;
  function CardArenaTierPlus(type, operator, value) {
    this.type = type;
    this.operator = operator;
    this.value = value;
  }
  CardArenaTierPlus.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardArenaTierPlus',
    interfaces: []
  };
  CardArenaTierPlus.prototype.component1 = function () {
    return this.type;
  };
  CardArenaTierPlus.prototype.component2 = function () {
    return this.operator;
  };
  CardArenaTierPlus.prototype.component3 = function () {
    return this.value;
  };
  CardArenaTierPlus.prototype.copy_ddbtbh$ = function (type, operator, value) {
    return new CardArenaTierPlus(type === void 0 ? this.type : type, operator === void 0 ? this.operator : operator, value === void 0 ? this.value : value);
  };
  CardArenaTierPlus.prototype.toString = function () {
    return 'CardArenaTierPlus(type=' + Kotlin.toString(this.type) + (', operator=' + Kotlin.toString(this.operator)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  CardArenaTierPlus.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.operator) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  CardArenaTierPlus.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.operator, other.operator) && Kotlin.equals(this.value, other.value)))));
  };
  function CardArenaTierPlusOperator(name, ordinal) {
    CardArenaTierPlusOperator$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardArenaTierPlusOperator_initFields() {
    CardArenaTierPlusOperator_initFields = function () {
    };
    CardArenaTierPlusOperator$EQUALS_instance = new CardArenaTierPlusOperator('EQUALS', 0);
    CardArenaTierPlusOperator$GREAT_instance = new CardArenaTierPlusOperator('GREAT', 1);
    CardArenaTierPlusOperator$MINOR_instance = new CardArenaTierPlusOperator('MINOR', 2);
    CardArenaTierPlusOperator$UNKNOWN_instance = new CardArenaTierPlusOperator('UNKNOWN', 3);
  }
  var CardArenaTierPlusOperator$EQUALS_instance;
  function CardArenaTierPlusOperator$EQUALS_getInstance() {
    CardArenaTierPlusOperator_initFields();
    return CardArenaTierPlusOperator$EQUALS_instance;
  }
  var CardArenaTierPlusOperator$GREAT_instance;
  function CardArenaTierPlusOperator$GREAT_getInstance() {
    CardArenaTierPlusOperator_initFields();
    return CardArenaTierPlusOperator$GREAT_instance;
  }
  var CardArenaTierPlusOperator$MINOR_instance;
  function CardArenaTierPlusOperator$MINOR_getInstance() {
    CardArenaTierPlusOperator_initFields();
    return CardArenaTierPlusOperator$MINOR_instance;
  }
  var CardArenaTierPlusOperator$UNKNOWN_instance;
  function CardArenaTierPlusOperator$UNKNOWN_getInstance() {
    CardArenaTierPlusOperator_initFields();
    return CardArenaTierPlusOperator$UNKNOWN_instance;
  }
  function CardArenaTierPlusOperator$Companion() {
    CardArenaTierPlusOperator$Companion_instance = this;
  }
  CardArenaTierPlusOperator$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    if (Kotlin.equals(value, '='))
      tmp$ = CardArenaTierPlusOperator$EQUALS_getInstance();
    else if (Kotlin.equals(value, '>'))
      tmp$ = CardArenaTierPlusOperator$GREAT_getInstance();
    else if (Kotlin.equals(value, '<'))
      tmp$ = CardArenaTierPlusOperator$MINOR_getInstance();
    else
      tmp$ = CardArenaTierPlusOperator$UNKNOWN_getInstance();
    return tmp$;
  };
  CardArenaTierPlusOperator$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardArenaTierPlusOperator$Companion_instance = null;
  function CardArenaTierPlusOperator$Companion_getInstance() {
    if (CardArenaTierPlusOperator$Companion_instance === null) {
      new CardArenaTierPlusOperator$Companion();
    }
    return CardArenaTierPlusOperator$Companion_instance;
  }
  CardArenaTierPlusOperator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardArenaTierPlusOperator',
    interfaces: [Enum]
  };
  function CardArenaTierPlusOperator$values() {
    return [CardArenaTierPlusOperator$EQUALS_getInstance(), CardArenaTierPlusOperator$GREAT_getInstance(), CardArenaTierPlusOperator$MINOR_getInstance(), CardArenaTierPlusOperator$UNKNOWN_getInstance()];
  }
  CardArenaTierPlusOperator.values = CardArenaTierPlusOperator$values;
  function CardArenaTierPlusOperator$valueOf(name) {
    switch (name) {
      case 'EQUALS':
        return CardArenaTierPlusOperator$EQUALS_getInstance();
      case 'GREAT':
        return CardArenaTierPlusOperator$GREAT_getInstance();
      case 'MINOR':
        return CardArenaTierPlusOperator$MINOR_getInstance();
      case 'UNKNOWN':
        return CardArenaTierPlusOperator$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardArenaTierPlusOperator.' + name);
    }
  }
  CardArenaTierPlusOperator.valueOf_61zpoe$ = CardArenaTierPlusOperator$valueOf;
  function CardArenaTierPlusType(name, ordinal, extraPoints) {
    CardArenaTierPlusType$Companion_getInstance();
    if (extraPoints === void 0)
      extraPoints = 5;
    Enum.call(this);
    this.extraPoints = extraPoints;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CardArenaTierPlusType_initFields() {
    CardArenaTierPlusType_initFields = function () {
    };
    CardArenaTierPlusType$ATTACK_instance = new CardArenaTierPlusType('ATTACK', 0);
    CardArenaTierPlusType$ATTR_instance = new CardArenaTierPlusType('ATTR', 1, 2);
    CardArenaTierPlusType$COST_instance = new CardArenaTierPlusType('COST', 2);
    CardArenaTierPlusType$HEALTH_instance = new CardArenaTierPlusType('HEALTH', 3);
    CardArenaTierPlusType$KEYWORD_instance = new CardArenaTierPlusType('KEYWORD', 4);
    CardArenaTierPlusType$RACE_instance = new CardArenaTierPlusType('RACE', 5);
    CardArenaTierPlusType$STRATEGY_instance = new CardArenaTierPlusType('STRATEGY', 6);
    CardArenaTierPlusType$TEXT_instance = new CardArenaTierPlusType('TEXT', 7);
    CardArenaTierPlusType$TYPE_instance = new CardArenaTierPlusType('TYPE', 8);
    CardArenaTierPlusType$UNKNOWN_instance = new CardArenaTierPlusType('UNKNOWN', 9);
  }
  var CardArenaTierPlusType$ATTACK_instance;
  function CardArenaTierPlusType$ATTACK_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$ATTACK_instance;
  }
  var CardArenaTierPlusType$ATTR_instance;
  function CardArenaTierPlusType$ATTR_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$ATTR_instance;
  }
  var CardArenaTierPlusType$COST_instance;
  function CardArenaTierPlusType$COST_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$COST_instance;
  }
  var CardArenaTierPlusType$HEALTH_instance;
  function CardArenaTierPlusType$HEALTH_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$HEALTH_instance;
  }
  var CardArenaTierPlusType$KEYWORD_instance;
  function CardArenaTierPlusType$KEYWORD_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$KEYWORD_instance;
  }
  var CardArenaTierPlusType$RACE_instance;
  function CardArenaTierPlusType$RACE_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$RACE_instance;
  }
  var CardArenaTierPlusType$STRATEGY_instance;
  function CardArenaTierPlusType$STRATEGY_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$STRATEGY_instance;
  }
  var CardArenaTierPlusType$TEXT_instance;
  function CardArenaTierPlusType$TEXT_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$TEXT_instance;
  }
  var CardArenaTierPlusType$TYPE_instance;
  function CardArenaTierPlusType$TYPE_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$TYPE_instance;
  }
  var CardArenaTierPlusType$UNKNOWN_instance;
  function CardArenaTierPlusType$UNKNOWN_getInstance() {
    CardArenaTierPlusType_initFields();
    return CardArenaTierPlusType$UNKNOWN_instance;
  }
  function CardArenaTierPlusType$Companion() {
    CardArenaTierPlusType$Companion_instance = this;
  }
  CardArenaTierPlusType$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = CardArenaTierPlusType$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? CardArenaTierPlusType$valueOf(name) : CardArenaTierPlusType$UNKNOWN_getInstance();
  };
  CardArenaTierPlusType$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CardArenaTierPlusType$Companion_instance = null;
  function CardArenaTierPlusType$Companion_getInstance() {
    if (CardArenaTierPlusType$Companion_instance === null) {
      new CardArenaTierPlusType$Companion();
    }
    return CardArenaTierPlusType$Companion_instance;
  }
  CardArenaTierPlusType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardArenaTierPlusType',
    interfaces: [Enum]
  };
  function CardArenaTierPlusType$values() {
    return [CardArenaTierPlusType$ATTACK_getInstance(), CardArenaTierPlusType$ATTR_getInstance(), CardArenaTierPlusType$COST_getInstance(), CardArenaTierPlusType$HEALTH_getInstance(), CardArenaTierPlusType$KEYWORD_getInstance(), CardArenaTierPlusType$RACE_getInstance(), CardArenaTierPlusType$STRATEGY_getInstance(), CardArenaTierPlusType$TEXT_getInstance(), CardArenaTierPlusType$TYPE_getInstance(), CardArenaTierPlusType$UNKNOWN_getInstance()];
  }
  CardArenaTierPlusType.values = CardArenaTierPlusType$values;
  function CardArenaTierPlusType$valueOf(name) {
    switch (name) {
      case 'ATTACK':
        return CardArenaTierPlusType$ATTACK_getInstance();
      case 'ATTR':
        return CardArenaTierPlusType$ATTR_getInstance();
      case 'COST':
        return CardArenaTierPlusType$COST_getInstance();
      case 'HEALTH':
        return CardArenaTierPlusType$HEALTH_getInstance();
      case 'KEYWORD':
        return CardArenaTierPlusType$KEYWORD_getInstance();
      case 'RACE':
        return CardArenaTierPlusType$RACE_getInstance();
      case 'STRATEGY':
        return CardArenaTierPlusType$STRATEGY_getInstance();
      case 'TEXT':
        return CardArenaTierPlusType$TEXT_getInstance();
      case 'TYPE':
        return CardArenaTierPlusType$TYPE_getInstance();
      case 'UNKNOWN':
        return CardArenaTierPlusType$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.CardArenaTierPlusType.' + name);
    }
  }
  CardArenaTierPlusType.valueOf_61zpoe$ = CardArenaTierPlusType$valueOf;
  function CardMissing(shortName, rarity, qtd) {
    this.shortName = shortName;
    this.rarity = rarity;
    this.qtd = qtd;
  }
  CardMissing.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardMissing',
    interfaces: []
  };
  CardMissing.prototype.component1 = function () {
    return this.shortName;
  };
  CardMissing.prototype.component2 = function () {
    return this.rarity;
  };
  CardMissing.prototype.component3 = function () {
    return this.qtd;
  };
  CardMissing.prototype.copy_eq5oph$ = function (shortName, rarity, qtd) {
    return new CardMissing(shortName === void 0 ? this.shortName : shortName, rarity === void 0 ? this.rarity : rarity, qtd === void 0 ? this.qtd : qtd);
  };
  CardMissing.prototype.toString = function () {
    return 'CardMissing(shortName=' + Kotlin.toString(this.shortName) + (', rarity=' + Kotlin.toString(this.rarity)) + (', qtd=' + Kotlin.toString(this.qtd)) + ')';
  };
  CardMissing.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.shortName) | 0;
    result = result * 31 + Kotlin.hashCode(this.rarity) | 0;
    result = result * 31 + Kotlin.hashCode(this.qtd) | 0;
    return result;
  };
  CardMissing.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.shortName, other.shortName) && Kotlin.equals(this.rarity, other.rarity) && Kotlin.equals(this.qtd, other.qtd)))));
  };
  function CardStatistic(shortName, rarity, unique) {
    this.shortName = shortName;
    this.rarity = rarity;
    this.unique = unique;
  }
  CardStatistic.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardStatistic',
    interfaces: []
  };
  CardStatistic.prototype.component1 = function () {
    return this.shortName;
  };
  CardStatistic.prototype.component2 = function () {
    return this.rarity;
  };
  CardStatistic.prototype.component3 = function () {
    return this.unique;
  };
  CardStatistic.prototype.copy_5z982k$ = function (shortName, rarity, unique) {
    return new CardStatistic(shortName === void 0 ? this.shortName : shortName, rarity === void 0 ? this.rarity : rarity, unique === void 0 ? this.unique : unique);
  };
  CardStatistic.prototype.toString = function () {
    return 'CardStatistic(shortName=' + Kotlin.toString(this.shortName) + (', rarity=' + Kotlin.toString(this.rarity)) + (', unique=' + Kotlin.toString(this.unique)) + ')';
  };
  CardStatistic.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.shortName) | 0;
    result = result * 31 + Kotlin.hashCode(this.rarity) | 0;
    result = result * 31 + Kotlin.hashCode(this.unique) | 0;
    return result;
  };
  CardStatistic.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.shortName, other.shortName) && Kotlin.equals(this.rarity, other.rarity) && Kotlin.equals(this.unique, other.unique)))));
  };
  function CardBasicInfo(shortName, set, attr) {
    this.shortName = shortName;
    this.set = set;
    this.attr = attr;
  }
  CardBasicInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardBasicInfo',
    interfaces: []
  };
  CardBasicInfo.prototype.component1 = function () {
    return this.shortName;
  };
  CardBasicInfo.prototype.component2 = function () {
    return this.set;
  };
  CardBasicInfo.prototype.component3 = function () {
    return this.attr;
  };
  CardBasicInfo.prototype.copy_6hosri$ = function (shortName, set, attr) {
    return new CardBasicInfo(shortName === void 0 ? this.shortName : shortName, set === void 0 ? this.set : set, attr === void 0 ? this.attr : attr);
  };
  CardBasicInfo.prototype.toString = function () {
    return 'CardBasicInfo(shortName=' + Kotlin.toString(this.shortName) + (', set=' + Kotlin.toString(this.set)) + (', attr=' + Kotlin.toString(this.attr)) + ')';
  };
  CardBasicInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.shortName) | 0;
    result = result * 31 + Kotlin.hashCode(this.set) | 0;
    result = result * 31 + Kotlin.hashCode(this.attr) | 0;
    return result;
  };
  CardBasicInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.shortName, other.shortName) && Kotlin.equals(this.set, other.set) && Kotlin.equals(this.attr, other.attr)))));
  };
  function CardSlot(card, qtd, currentQtd, recentChanged) {
    if (currentQtd === void 0)
      currentQtd = qtd;
    if (recentChanged === void 0)
      recentChanged = false;
    this.card = card;
    this.qtd = qtd;
    this.currentQtd = currentQtd;
    this.recentChanged = recentChanged;
  }
  CardSlot.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardSlot',
    interfaces: []
  };
  CardSlot.prototype.component1 = function () {
    return this.card;
  };
  CardSlot.prototype.component2 = function () {
    return this.qtd;
  };
  CardSlot.prototype.component3 = function () {
    return this.currentQtd;
  };
  CardSlot.prototype.component4 = function () {
    return this.recentChanged;
  };
  CardSlot.prototype.copy_4i8ceb$ = function (card, qtd, currentQtd, recentChanged) {
    return new CardSlot(card === void 0 ? this.card : card, qtd === void 0 ? this.qtd : qtd, currentQtd === void 0 ? this.currentQtd : currentQtd, recentChanged === void 0 ? this.recentChanged : recentChanged);
  };
  CardSlot.prototype.toString = function () {
    return 'CardSlot(card=' + Kotlin.toString(this.card) + (', qtd=' + Kotlin.toString(this.qtd)) + (', currentQtd=' + Kotlin.toString(this.currentQtd)) + (', recentChanged=' + Kotlin.toString(this.recentChanged)) + ')';
  };
  CardSlot.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.card) | 0;
    result = result * 31 + Kotlin.hashCode(this.qtd) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentQtd) | 0;
    result = result * 31 + Kotlin.hashCode(this.recentChanged) | 0;
    return result;
  };
  CardSlot.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.card, other.card) && Kotlin.equals(this.qtd, other.qtd) && Kotlin.equals(this.currentQtd, other.currentQtd) && Kotlin.equals(this.recentChanged, other.recentChanged)))));
  };
  function CardPick(card, value, synergy) {
    this.card = card;
    this.value = value;
    this.synergy = synergy;
  }
  CardPick.prototype.withoutSynergyList = function () {
    return new CardPick(this.card, this.value, Kotlin.kotlin.collections.emptyList_287e2$());
  };
  CardPick.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CardPick',
    interfaces: []
  };
  CardPick.prototype.component1 = function () {
    return this.card;
  };
  CardPick.prototype.component2 = function () {
    return this.value;
  };
  CardPick.prototype.component3 = function () {
    return this.synergy;
  };
  CardPick.prototype.copy_htt3w7$ = function (card, value, synergy) {
    return new CardPick(card === void 0 ? this.card : card, value === void 0 ? this.value : value, synergy === void 0 ? this.synergy : synergy);
  };
  CardPick.prototype.toString = function () {
    return 'CardPick(card=' + Kotlin.toString(this.card) + (', value=' + Kotlin.toString(this.value)) + (', synergy=' + Kotlin.toString(this.synergy)) + ')';
  };
  CardPick.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.card) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    result = result * 31 + Kotlin.hashCode(this.synergy) | 0;
    return result;
  };
  CardPick.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.card, other.card) && Kotlin.equals(this.value, other.value) && Kotlin.equals(this.synergy, other.synergy)))));
  };
  function Card(name, shortName, set, attr, dualAttr1, dualAttr2, rarity, unique, cost, attack, health, type, race, keywords, text_0, arenaTier, arenaTierPlus, evolves, season) {
    Card$Companion_getInstance();
    this.name = name;
    this.shortName = shortName;
    this.set = set;
    this.attr = attr;
    this.dualAttr1 = dualAttr1;
    this.dualAttr2 = dualAttr2;
    this.rarity = rarity;
    this.unique = unique;
    this.cost = cost;
    this.attack = attack;
    this.health = health;
    this.type = type;
    this.race = race;
    this.keywords = keywords;
    this.text = text_0;
    this.arenaTier = arenaTier;
    this.arenaTierPlus = arenaTierPlus;
    this.evolves = evolves;
    this.season = season;
  }
  function Card$Companion() {
    Card$Companion_instance = this;
    this.DUMMY = new Card('Unknown', '', CardSet$UNKNOWN_getInstance(), CardAttribute$AGILITY_getInstance(), CardAttribute$AGILITY_getInstance(), CardAttribute$AGILITY_getInstance(), CardRarity$COMMON_getInstance(), false, 0, 0, 0, CardType$UNKNOWN_getInstance(), CardRace$ARGONIAN_getInstance(), Kotlin.kotlin.collections.emptyList_287e2$(), '', CardArenaTier$NONE_getInstance(), null, false, '');
  }
  Card$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Card$Companion_instance = null;
  function Card$Companion_getInstance() {
    if (Card$Companion_instance === null) {
      new Card$Companion();
    }
    return Card$Companion_instance;
  }
  Card.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Card',
    interfaces: []
  };
  Card.prototype.component1 = function () {
    return this.name;
  };
  Card.prototype.component2 = function () {
    return this.shortName;
  };
  Card.prototype.component3 = function () {
    return this.set;
  };
  Card.prototype.component4 = function () {
    return this.attr;
  };
  Card.prototype.component5 = function () {
    return this.dualAttr1;
  };
  Card.prototype.component6 = function () {
    return this.dualAttr2;
  };
  Card.prototype.component7 = function () {
    return this.rarity;
  };
  Card.prototype.component8 = function () {
    return this.unique;
  };
  Card.prototype.component9 = function () {
    return this.cost;
  };
  Card.prototype.component10 = function () {
    return this.attack;
  };
  Card.prototype.component11 = function () {
    return this.health;
  };
  Card.prototype.component12 = function () {
    return this.type;
  };
  Card.prototype.component13 = function () {
    return this.race;
  };
  Card.prototype.component14 = function () {
    return this.keywords;
  };
  Card.prototype.component15 = function () {
    return this.text;
  };
  Card.prototype.component16 = function () {
    return this.arenaTier;
  };
  Card.prototype.component17 = function () {
    return this.arenaTierPlus;
  };
  Card.prototype.component18 = function () {
    return this.evolves;
  };
  Card.prototype.component19 = function () {
    return this.season;
  };
  Card.prototype.copy_xyk7tv$ = function (name, shortName, set, attr, dualAttr1, dualAttr2, rarity, unique, cost, attack, health, type, race, keywords, text_0, arenaTier, arenaTierPlus, evolves, season) {
    return new Card(name === void 0 ? this.name : name, shortName === void 0 ? this.shortName : shortName, set === void 0 ? this.set : set, attr === void 0 ? this.attr : attr, dualAttr1 === void 0 ? this.dualAttr1 : dualAttr1, dualAttr2 === void 0 ? this.dualAttr2 : dualAttr2, rarity === void 0 ? this.rarity : rarity, unique === void 0 ? this.unique : unique, cost === void 0 ? this.cost : cost, attack === void 0 ? this.attack : attack, health === void 0 ? this.health : health, type === void 0 ? this.type : type, race === void 0 ? this.race : race, keywords === void 0 ? this.keywords : keywords, text_0 === void 0 ? this.text : text_0, arenaTier === void 0 ? this.arenaTier : arenaTier, arenaTierPlus === void 0 ? this.arenaTierPlus : arenaTierPlus, evolves === void 0 ? this.evolves : evolves, season === void 0 ? this.season : season);
  };
  Card.prototype.toString = function () {
    return 'Card(name=' + Kotlin.toString(this.name) + (', shortName=' + Kotlin.toString(this.shortName)) + (', set=' + Kotlin.toString(this.set)) + (', attr=' + Kotlin.toString(this.attr)) + (', dualAttr1=' + Kotlin.toString(this.dualAttr1)) + (', dualAttr2=' + Kotlin.toString(this.dualAttr2)) + (', rarity=' + Kotlin.toString(this.rarity)) + (', unique=' + Kotlin.toString(this.unique)) + (', cost=' + Kotlin.toString(this.cost)) + (', attack=' + Kotlin.toString(this.attack)) + (', health=' + Kotlin.toString(this.health)) + (', type=' + Kotlin.toString(this.type)) + (', race=' + Kotlin.toString(this.race)) + (', keywords=' + Kotlin.toString(this.keywords)) + (', text=' + Kotlin.toString(this.text)) + (', arenaTier=' + Kotlin.toString(this.arenaTier)) + (', arenaTierPlus=' + Kotlin.toString(this.arenaTierPlus)) + (', evolves=' + Kotlin.toString(this.evolves)) + (', season=' + Kotlin.toString(this.season)) + ')';
  };
  Card.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.shortName) | 0;
    result = result * 31 + Kotlin.hashCode(this.set) | 0;
    result = result * 31 + Kotlin.hashCode(this.attr) | 0;
    result = result * 31 + Kotlin.hashCode(this.dualAttr1) | 0;
    result = result * 31 + Kotlin.hashCode(this.dualAttr2) | 0;
    result = result * 31 + Kotlin.hashCode(this.rarity) | 0;
    result = result * 31 + Kotlin.hashCode(this.unique) | 0;
    result = result * 31 + Kotlin.hashCode(this.cost) | 0;
    result = result * 31 + Kotlin.hashCode(this.attack) | 0;
    result = result * 31 + Kotlin.hashCode(this.health) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.race) | 0;
    result = result * 31 + Kotlin.hashCode(this.keywords) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.arenaTier) | 0;
    result = result * 31 + Kotlin.hashCode(this.arenaTierPlus) | 0;
    result = result * 31 + Kotlin.hashCode(this.evolves) | 0;
    result = result * 31 + Kotlin.hashCode(this.season) | 0;
    return result;
  };
  Card.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.shortName, other.shortName) && Kotlin.equals(this.set, other.set) && Kotlin.equals(this.attr, other.attr) && Kotlin.equals(this.dualAttr1, other.dualAttr1) && Kotlin.equals(this.dualAttr2, other.dualAttr2) && Kotlin.equals(this.rarity, other.rarity) && Kotlin.equals(this.unique, other.unique) && Kotlin.equals(this.cost, other.cost) && Kotlin.equals(this.attack, other.attack) && Kotlin.equals(this.health, other.health) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.race, other.race) && Kotlin.equals(this.keywords, other.keywords) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.arenaTier, other.arenaTier) && Kotlin.equals(this.arenaTierPlus, other.arenaTierPlus) && Kotlin.equals(this.evolves, other.evolves) && Kotlin.equals(this.season, other.season)))));
  };
  function DeckClass(name, ordinal, attr1, attr2) {
    if (attr2 === void 0)
      attr2 = CardAttribute$NEUTRAL_getInstance();
    Enum.call(this);
    this.attr1 = attr1;
    this.attr2 = attr2;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DeckClass_initFields() {
    DeckClass_initFields = function () {
    };
    DeckClass$ARCHER_instance = new DeckClass('ARCHER', 0, CardAttribute$STRENGTH_getInstance(), CardAttribute$AGILITY_getInstance());
    DeckClass$ASSASSIN_instance = new DeckClass('ASSASSIN', 1, CardAttribute$INTELLIGENCE_getInstance(), CardAttribute$AGILITY_getInstance());
    DeckClass$BATTLEMAGE_instance = new DeckClass('BATTLEMAGE', 2, CardAttribute$STRENGTH_getInstance(), CardAttribute$INTELLIGENCE_getInstance());
    DeckClass$CRUSADER_instance = new DeckClass('CRUSADER', 3, CardAttribute$STRENGTH_getInstance(), CardAttribute$WILLPOWER_getInstance());
    DeckClass$MAGE_instance = new DeckClass('MAGE', 4, CardAttribute$INTELLIGENCE_getInstance(), CardAttribute$WILLPOWER_getInstance());
    DeckClass$MONK_instance = new DeckClass('MONK', 5, CardAttribute$WILLPOWER_getInstance(), CardAttribute$AGILITY_getInstance());
    DeckClass$SCOUT_instance = new DeckClass('SCOUT', 6, CardAttribute$AGILITY_getInstance(), CardAttribute$ENDURANCE_getInstance());
    DeckClass$SORCERER_instance = new DeckClass('SORCERER', 7, CardAttribute$INTELLIGENCE_getInstance(), CardAttribute$ENDURANCE_getInstance());
    DeckClass$SPELLSWORD_instance = new DeckClass('SPELLSWORD', 8, CardAttribute$WILLPOWER_getInstance(), CardAttribute$ENDURANCE_getInstance());
    DeckClass$WARRIOR_instance = new DeckClass('WARRIOR', 9, CardAttribute$STRENGTH_getInstance(), CardAttribute$ENDURANCE_getInstance());
    DeckClass$STRENGTH_instance = new DeckClass('STRENGTH', 10, CardAttribute$STRENGTH_getInstance());
    DeckClass$INTELLIGENCE_instance = new DeckClass('INTELLIGENCE', 11, CardAttribute$INTELLIGENCE_getInstance());
    DeckClass$AGILITY_instance = new DeckClass('AGILITY', 12, CardAttribute$AGILITY_getInstance());
    DeckClass$WILLPOWER_instance = new DeckClass('WILLPOWER', 13, CardAttribute$WILLPOWER_getInstance());
    DeckClass$ENDURANCE_instance = new DeckClass('ENDURANCE', 14, CardAttribute$ENDURANCE_getInstance());
    DeckClass$NEUTRAL_instance = new DeckClass('NEUTRAL', 15, CardAttribute$NEUTRAL_getInstance());
  }
  var DeckClass$ARCHER_instance;
  function DeckClass$ARCHER_getInstance() {
    DeckClass_initFields();
    return DeckClass$ARCHER_instance;
  }
  var DeckClass$ASSASSIN_instance;
  function DeckClass$ASSASSIN_getInstance() {
    DeckClass_initFields();
    return DeckClass$ASSASSIN_instance;
  }
  var DeckClass$BATTLEMAGE_instance;
  function DeckClass$BATTLEMAGE_getInstance() {
    DeckClass_initFields();
    return DeckClass$BATTLEMAGE_instance;
  }
  var DeckClass$CRUSADER_instance;
  function DeckClass$CRUSADER_getInstance() {
    DeckClass_initFields();
    return DeckClass$CRUSADER_instance;
  }
  var DeckClass$MAGE_instance;
  function DeckClass$MAGE_getInstance() {
    DeckClass_initFields();
    return DeckClass$MAGE_instance;
  }
  var DeckClass$MONK_instance;
  function DeckClass$MONK_getInstance() {
    DeckClass_initFields();
    return DeckClass$MONK_instance;
  }
  var DeckClass$SCOUT_instance;
  function DeckClass$SCOUT_getInstance() {
    DeckClass_initFields();
    return DeckClass$SCOUT_instance;
  }
  var DeckClass$SORCERER_instance;
  function DeckClass$SORCERER_getInstance() {
    DeckClass_initFields();
    return DeckClass$SORCERER_instance;
  }
  var DeckClass$SPELLSWORD_instance;
  function DeckClass$SPELLSWORD_getInstance() {
    DeckClass_initFields();
    return DeckClass$SPELLSWORD_instance;
  }
  var DeckClass$WARRIOR_instance;
  function DeckClass$WARRIOR_getInstance() {
    DeckClass_initFields();
    return DeckClass$WARRIOR_instance;
  }
  var DeckClass$STRENGTH_instance;
  function DeckClass$STRENGTH_getInstance() {
    DeckClass_initFields();
    return DeckClass$STRENGTH_instance;
  }
  var DeckClass$INTELLIGENCE_instance;
  function DeckClass$INTELLIGENCE_getInstance() {
    DeckClass_initFields();
    return DeckClass$INTELLIGENCE_instance;
  }
  var DeckClass$AGILITY_instance;
  function DeckClass$AGILITY_getInstance() {
    DeckClass_initFields();
    return DeckClass$AGILITY_instance;
  }
  var DeckClass$WILLPOWER_instance;
  function DeckClass$WILLPOWER_getInstance() {
    DeckClass_initFields();
    return DeckClass$WILLPOWER_instance;
  }
  var DeckClass$ENDURANCE_instance;
  function DeckClass$ENDURANCE_getInstance() {
    DeckClass_initFields();
    return DeckClass$ENDURANCE_instance;
  }
  var DeckClass$NEUTRAL_instance;
  function DeckClass$NEUTRAL_getInstance() {
    DeckClass_initFields();
    return DeckClass$NEUTRAL_instance;
  }
  DeckClass.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DeckClass',
    interfaces: [Enum]
  };
  function DeckClass$values() {
    return [DeckClass$ARCHER_getInstance(), DeckClass$ASSASSIN_getInstance(), DeckClass$BATTLEMAGE_getInstance(), DeckClass$CRUSADER_getInstance(), DeckClass$MAGE_getInstance(), DeckClass$MONK_getInstance(), DeckClass$SCOUT_getInstance(), DeckClass$SORCERER_getInstance(), DeckClass$SPELLSWORD_getInstance(), DeckClass$WARRIOR_getInstance(), DeckClass$STRENGTH_getInstance(), DeckClass$INTELLIGENCE_getInstance(), DeckClass$AGILITY_getInstance(), DeckClass$WILLPOWER_getInstance(), DeckClass$ENDURANCE_getInstance(), DeckClass$NEUTRAL_getInstance()];
  }
  DeckClass.values = DeckClass$values;
  function DeckClass$valueOf(name) {
    switch (name) {
      case 'ARCHER':
        return DeckClass$ARCHER_getInstance();
      case 'ASSASSIN':
        return DeckClass$ASSASSIN_getInstance();
      case 'BATTLEMAGE':
        return DeckClass$BATTLEMAGE_getInstance();
      case 'CRUSADER':
        return DeckClass$CRUSADER_getInstance();
      case 'MAGE':
        return DeckClass$MAGE_getInstance();
      case 'MONK':
        return DeckClass$MONK_getInstance();
      case 'SCOUT':
        return DeckClass$SCOUT_getInstance();
      case 'SORCERER':
        return DeckClass$SORCERER_getInstance();
      case 'SPELLSWORD':
        return DeckClass$SPELLSWORD_getInstance();
      case 'WARRIOR':
        return DeckClass$WARRIOR_getInstance();
      case 'STRENGTH':
        return DeckClass$STRENGTH_getInstance();
      case 'INTELLIGENCE':
        return DeckClass$INTELLIGENCE_getInstance();
      case 'AGILITY':
        return DeckClass$AGILITY_getInstance();
      case 'WILLPOWER':
        return DeckClass$WILLPOWER_getInstance();
      case 'ENDURANCE':
        return DeckClass$ENDURANCE_getInstance();
      case 'NEUTRAL':
        return DeckClass$NEUTRAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.model.DeckClass.' + name);
    }
  }
  DeckClass.valueOf_61zpoe$ = DeckClass$valueOf;
  function DeckType(name, ordinal) {
    DeckType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DeckType_initFields() {
    DeckType_initFields = function () {
    };
    DeckType$AGGRO_instance = new DeckType('AGGRO', 0);
    DeckType$ARENA_instance = new DeckType('ARENA', 1);
    DeckType$COMBO_instance = new DeckType('COMBO', 2);
    DeckType$CONTROL_instance = new DeckType('CONTROL', 3);
    DeckType$MIDRANGE_instance = new DeckType('MIDRANGE', 4);
    DeckType$OTHER_instance = new DeckType('OTHER', 5);
  }
  var DeckType$AGGRO_instance;
  function DeckType$AGGRO_getInstance() {
    DeckType_initFields();
    return DeckType$AGGRO_instance;
  }
  var DeckType$ARENA_instance;
  function DeckType$ARENA_getInstance() {
    DeckType_initFields();
    return DeckType$ARENA_instance;
  }
  var DeckType$COMBO_instance;
  function DeckType$COMBO_getInstance() {
    DeckType_initFields();
    return DeckType$COMBO_instance;
  }
  var DeckType$CONTROL_instance;
  function DeckType$CONTROL_getInstance() {
    DeckType_initFields();
    return DeckType$CONTROL_instance;
  }
  var DeckType$MIDRANGE_instance;
  function DeckType$MIDRANGE_getInstance() {
    DeckType_initFields();
    return DeckType$MIDRANGE_instance;
  }
  var DeckType$OTHER_instance;
  function DeckType$OTHER_getInstance() {
    DeckType_initFields();
    return DeckType$OTHER_instance;
  }
  function DeckType$Companion() {
    DeckType$Companion_instance = this;
  }
  DeckType$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = value.toUpperCase();
    var $receiver = DeckType$OTHER_getInstance();
    var $receiver_0 = DeckType$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver_0.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_0.length; ++tmp$_0) {
      var item = $receiver_0[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return (tmp$ = !destination.contains_11rb$(name) ? $receiver : null) != null ? tmp$ : DeckType$valueOf(name);
  };
  DeckType$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DeckType$Companion_instance = null;
  function DeckType$Companion_getInstance() {
    if (DeckType$Companion_instance === null) {
      new DeckType$Companion();
    }
    return DeckType$Companion_instance;
  }
  DeckType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DeckType',
    interfaces: [Enum]
  };
  function DeckType$values() {
    return [DeckType$AGGRO_getInstance(), DeckType$ARENA_getInstance(), DeckType$COMBO_getInstance(), DeckType$CONTROL_getInstance(), DeckType$MIDRANGE_getInstance(), DeckType$OTHER_getInstance()];
  }
  DeckType.values = DeckType$values;
  function DeckType$valueOf(name) {
    switch (name) {
      case 'AGGRO':
        return DeckType$AGGRO_getInstance();
      case 'ARENA':
        return DeckType$ARENA_getInstance();
      case 'COMBO':
        return DeckType$COMBO_getInstance();
      case 'CONTROL':
        return DeckType$CONTROL_getInstance();
      case 'MIDRANGE':
        return DeckType$MIDRANGE_getInstance();
      case 'OTHER':
        return DeckType$OTHER_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.model.DeckType.' + name);
    }
  }
  DeckType.valueOf_61zpoe$ = DeckType$valueOf;
  function DeckUpdate(date, changes) {
    this.date = date;
    this.changes = changes;
  }
  DeckUpdate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DeckUpdate',
    interfaces: []
  };
  DeckUpdate.prototype.component1 = function () {
    return this.date;
  };
  DeckUpdate.prototype.component2 = function () {
    return this.changes;
  };
  DeckUpdate.prototype.copy_pq2mwx$ = function (date, changes) {
    return new DeckUpdate(date === void 0 ? this.date : date, changes === void 0 ? this.changes : changes);
  };
  DeckUpdate.prototype.toString = function () {
    return 'DeckUpdate(date=' + Kotlin.toString(this.date) + (', changes=' + Kotlin.toString(this.changes)) + ')';
  };
  DeckUpdate.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.changes) | 0;
    return result;
  };
  DeckUpdate.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.changes, other.changes)))));
  };
  function DeckComment(uuid, owner, comment, date) {
    this.uuid = uuid;
    this.owner = owner;
    this.comment = comment;
    this.date = date;
  }
  DeckComment.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DeckComment',
    interfaces: []
  };
  DeckComment.prototype.component1 = function () {
    return this.uuid;
  };
  DeckComment.prototype.component2 = function () {
    return this.owner;
  };
  DeckComment.prototype.component3 = function () {
    return this.comment;
  };
  DeckComment.prototype.component4 = function () {
    return this.date;
  };
  DeckComment.prototype.copy_msyqkw$ = function (uuid, owner, comment, date) {
    return new DeckComment(uuid === void 0 ? this.uuid : uuid, owner === void 0 ? this.owner : owner, comment === void 0 ? this.comment : comment, date === void 0 ? this.date : date);
  };
  DeckComment.prototype.toString = function () {
    return 'DeckComment(uuid=' + Kotlin.toString(this.uuid) + (', owner=' + Kotlin.toString(this.owner)) + (', comment=' + Kotlin.toString(this.comment)) + (', date=' + Kotlin.toString(this.date)) + ')';
  };
  DeckComment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.comment) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    return result;
  };
  DeckComment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uuid, other.uuid) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.comment, other.comment) && Kotlin.equals(this.date, other.date)))));
  };
  function Deck(uuid, name, owner, private_0, type, cls, cost, createdAt, updatedAt, patch, likes, views, cards, updates, comments) {
    Deck$Companion_getInstance();
    this.uuid = uuid;
    this.name = name;
    this.owner = owner;
    this.private = private_0;
    this.type = type;
    this.cls = cls;
    this.cost = cost;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.patch = patch;
    this.likes = likes;
    this.views = views;
    this.cards = cards;
    this.updates = updates;
    this.comments = comments;
  }
  function Deck$Companion() {
    Deck$Companion_instance = this;
    this.DUMMY = new Deck('', '', '', false, DeckType$OTHER_getInstance(), DeckClass$NEUTRAL_getInstance(), 0, new Date(), new Date(), '', Kotlin.kotlin.collections.emptyList_287e2$(), 0, Kotlin.kotlin.collections.emptyMap_q3lmfv$(), Kotlin.kotlin.collections.emptyList_287e2$(), Kotlin.kotlin.collections.emptyList_287e2$());
  }
  Deck$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Deck$Companion_instance = null;
  function Deck$Companion_getInstance() {
    if (Deck$Companion_instance === null) {
      new Deck$Companion();
    }
    return Deck$Companion_instance;
  }
  Deck.prototype.toString = function () {
    return "Deck(id='" + this.uuid + "', name='" + this.name + "', owner='" + this.owner + "', private=" + this.private + ', type=' + this.type + ', cls=' + this.cls + ', cost=' + this.cost + ', ' + ('createdAt=' + this.createdAt + ', updatedAt=' + this.updatedAt + ", patch='" + this.patch + "', likes=" + this.likes + ', views=' + this.views + ', cards=' + this.cards + ', ') + ('updates=' + this.updates + ', comments=' + this.comments + ')');
  };
  Deck.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Deck',
    interfaces: []
  };
  Deck.prototype.component1 = function () {
    return this.uuid;
  };
  Deck.prototype.component2 = function () {
    return this.name;
  };
  Deck.prototype.component3 = function () {
    return this.owner;
  };
  Deck.prototype.component4 = function () {
    return this.private;
  };
  Deck.prototype.component5 = function () {
    return this.type;
  };
  Deck.prototype.component6 = function () {
    return this.cls;
  };
  Deck.prototype.component7 = function () {
    return this.cost;
  };
  Deck.prototype.component8 = function () {
    return this.createdAt;
  };
  Deck.prototype.component9 = function () {
    return this.updatedAt;
  };
  Deck.prototype.component10 = function () {
    return this.patch;
  };
  Deck.prototype.component11 = function () {
    return this.likes;
  };
  Deck.prototype.component12 = function () {
    return this.views;
  };
  Deck.prototype.component13 = function () {
    return this.cards;
  };
  Deck.prototype.component14 = function () {
    return this.updates;
  };
  Deck.prototype.component15 = function () {
    return this.comments;
  };
  Deck.prototype.copy_xr7kol$ = function (uuid, name, owner, private_0, type, cls, cost, createdAt, updatedAt, patch, likes, views, cards, updates, comments) {
    return new Deck(uuid === void 0 ? this.uuid : uuid, name === void 0 ? this.name : name, owner === void 0 ? this.owner : owner, private_0 === void 0 ? this.private : private_0, type === void 0 ? this.type : type, cls === void 0 ? this.cls : cls, cost === void 0 ? this.cost : cost, createdAt === void 0 ? this.createdAt : createdAt, updatedAt === void 0 ? this.updatedAt : updatedAt, patch === void 0 ? this.patch : patch, likes === void 0 ? this.likes : likes, views === void 0 ? this.views : views, cards === void 0 ? this.cards : cards, updates === void 0 ? this.updates : updates, comments === void 0 ? this.comments : comments);
  };
  Deck.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.owner) | 0;
    result = result * 31 + Kotlin.hashCode(this.private) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.cls) | 0;
    result = result * 31 + Kotlin.hashCode(this.cost) | 0;
    result = result * 31 + Kotlin.hashCode(this.createdAt) | 0;
    result = result * 31 + Kotlin.hashCode(this.updatedAt) | 0;
    result = result * 31 + Kotlin.hashCode(this.patch) | 0;
    result = result * 31 + Kotlin.hashCode(this.likes) | 0;
    result = result * 31 + Kotlin.hashCode(this.views) | 0;
    result = result * 31 + Kotlin.hashCode(this.cards) | 0;
    result = result * 31 + Kotlin.hashCode(this.updates) | 0;
    result = result * 31 + Kotlin.hashCode(this.comments) | 0;
    return result;
  };
  Deck.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uuid, other.uuid) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.owner, other.owner) && Kotlin.equals(this.private, other.private) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.cls, other.cls) && Kotlin.equals(this.cost, other.cost) && Kotlin.equals(this.createdAt, other.createdAt) && Kotlin.equals(this.updatedAt, other.updatedAt) && Kotlin.equals(this.patch, other.patch) && Kotlin.equals(this.likes, other.likes) && Kotlin.equals(this.views, other.views) && Kotlin.equals(this.cards, other.cards) && Kotlin.equals(this.updates, other.updates) && Kotlin.equals(this.comments, other.comments)))));
  };
  function MatchMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MatchMode_initFields() {
    MatchMode_initFields = function () {
    };
    MatchMode$RANKED_instance = new MatchMode('RANKED', 0);
    MatchMode$CASUAL_instance = new MatchMode('CASUAL', 1);
    MatchMode$ARENA_instance = new MatchMode('ARENA', 2);
    MatchMode$PRATICE_instance = new MatchMode('PRATICE', 3);
  }
  var MatchMode$RANKED_instance;
  function MatchMode$RANKED_getInstance() {
    MatchMode_initFields();
    return MatchMode$RANKED_instance;
  }
  var MatchMode$CASUAL_instance;
  function MatchMode$CASUAL_getInstance() {
    MatchMode_initFields();
    return MatchMode$CASUAL_instance;
  }
  var MatchMode$ARENA_instance;
  function MatchMode$ARENA_getInstance() {
    MatchMode_initFields();
    return MatchMode$ARENA_instance;
  }
  var MatchMode$PRATICE_instance;
  function MatchMode$PRATICE_getInstance() {
    MatchMode_initFields();
    return MatchMode$PRATICE_instance;
  }
  MatchMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MatchMode',
    interfaces: [Enum]
  };
  function MatchMode$values() {
    return [MatchMode$RANKED_getInstance(), MatchMode$CASUAL_getInstance(), MatchMode$ARENA_getInstance(), MatchMode$PRATICE_getInstance()];
  }
  MatchMode.values = MatchMode$values;
  function MatchMode$valueOf(name) {
    switch (name) {
      case 'RANKED':
        return MatchMode$RANKED_getInstance();
      case 'CASUAL':
        return MatchMode$CASUAL_getInstance();
      case 'ARENA':
        return MatchMode$ARENA_getInstance();
      case 'PRATICE':
        return MatchMode$PRATICE_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.MatchMode.' + name);
    }
  }
  MatchMode.valueOf_61zpoe$ = MatchMode$valueOf;
  function MatchDeck(name, cls, type, deck, version) {
    if (name === void 0)
      name = null;
    if (deck === void 0)
      deck = null;
    if (version === void 0)
      version = null;
    this.name = name;
    this.cls = cls;
    this.type = type;
    this.deck = deck;
    this.version = version;
  }
  MatchDeck.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MatchDeck',
    interfaces: []
  };
  MatchDeck.prototype.component1 = function () {
    return this.name;
  };
  MatchDeck.prototype.component2 = function () {
    return this.cls;
  };
  MatchDeck.prototype.component3 = function () {
    return this.type;
  };
  MatchDeck.prototype.component4 = function () {
    return this.deck;
  };
  MatchDeck.prototype.component5 = function () {
    return this.version;
  };
  MatchDeck.prototype.copy_ahgg8h$ = function (name, cls, type, deck, version) {
    return new MatchDeck(name === void 0 ? this.name : name, cls === void 0 ? this.cls : cls, type === void 0 ? this.type : type, deck === void 0 ? this.deck : deck, version === void 0 ? this.version : version);
  };
  MatchDeck.prototype.toString = function () {
    return 'MatchDeck(name=' + Kotlin.toString(this.name) + (', cls=' + Kotlin.toString(this.cls)) + (', type=' + Kotlin.toString(this.type)) + (', deck=' + Kotlin.toString(this.deck)) + (', version=' + Kotlin.toString(this.version)) + ')';
  };
  MatchDeck.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.cls) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.deck) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    return result;
  };
  MatchDeck.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.cls, other.cls) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.deck, other.deck) && Kotlin.equals(this.version, other.version)))));
  };
  function Match(uuid, first, player, opponent, mode, season, rank, legend, win) {
    Match$Companion_getInstance();
    this.uuid = uuid;
    this.first = first;
    this.player = player;
    this.opponent = opponent;
    this.mode = mode;
    this.season = season;
    this.rank = rank;
    this.legend = legend;
    this.win = win;
  }
  function Match$Companion() {
    Match$Companion_instance = this;
  }
  Match$Companion.prototype.parse_uvq6m$ = function (id, json_0) {
    var tmp$, tmp$_0;
    var playerJson = Kotlin.isType(tmp$ = json_0['player'], Object) ? tmp$ : Kotlin.throwCCE();
    var opponentJson = Kotlin.isType(tmp$_0 = json_0['opponent'], Object) ? tmp$_0 : Kotlin.throwCCE();
    var player = new MatchDeck(getString(playerJson, 'name'), DeckClass$values()[getInt(playerJson, 'cls')], DeckType$values()[getInt(playerJson, 'type')], getString(playerJson, 'deck'), getString(playerJson, 'version'));
    var opponent = new MatchDeck(void 0, DeckClass$values()[getInt(opponentJson, 'cls')], DeckType$values()[getInt(opponentJson, 'type')]);
    return new Match(id, getBoolean(json_0, 'first'), player, opponent, MatchMode$values()[getInt(json_0, 'mode')], getString(json_0, 'season'), getInt(json_0, 'rank'), getBoolean(json_0, 'legend'), getBoolean(json_0, 'win'));
  };
  Match$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Match$Companion_instance = null;
  function Match$Companion_getInstance() {
    if (Match$Companion_instance === null) {
      new Match$Companion();
    }
    return Match$Companion_instance;
  }
  Match.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Match',
    interfaces: []
  };
  Match.prototype.component1 = function () {
    return this.uuid;
  };
  Match.prototype.component2 = function () {
    return this.first;
  };
  Match.prototype.component3 = function () {
    return this.player;
  };
  Match.prototype.component4 = function () {
    return this.opponent;
  };
  Match.prototype.component5 = function () {
    return this.mode;
  };
  Match.prototype.component6 = function () {
    return this.season;
  };
  Match.prototype.component7 = function () {
    return this.rank;
  };
  Match.prototype.component8 = function () {
    return this.legend;
  };
  Match.prototype.component9 = function () {
    return this.win;
  };
  Match.prototype.copy_urhapt$ = function (uuid, first, player, opponent, mode, season, rank, legend, win) {
    return new Match(uuid === void 0 ? this.uuid : uuid, first === void 0 ? this.first : first, player === void 0 ? this.player : player, opponent === void 0 ? this.opponent : opponent, mode === void 0 ? this.mode : mode, season === void 0 ? this.season : season, rank === void 0 ? this.rank : rank, legend === void 0 ? this.legend : legend, win === void 0 ? this.win : win);
  };
  Match.prototype.toString = function () {
    return 'Match(uuid=' + Kotlin.toString(this.uuid) + (', first=' + Kotlin.toString(this.first)) + (', player=' + Kotlin.toString(this.player)) + (', opponent=' + Kotlin.toString(this.opponent)) + (', mode=' + Kotlin.toString(this.mode)) + (', season=' + Kotlin.toString(this.season)) + (', rank=' + Kotlin.toString(this.rank)) + (', legend=' + Kotlin.toString(this.legend)) + (', win=' + Kotlin.toString(this.win)) + ')';
  };
  Match.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uuid) | 0;
    result = result * 31 + Kotlin.hashCode(this.first) | 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.opponent) | 0;
    result = result * 31 + Kotlin.hashCode(this.mode) | 0;
    result = result * 31 + Kotlin.hashCode(this.season) | 0;
    result = result * 31 + Kotlin.hashCode(this.rank) | 0;
    result = result * 31 + Kotlin.hashCode(this.legend) | 0;
    result = result * 31 + Kotlin.hashCode(this.win) | 0;
    return result;
  };
  Match.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uuid, other.uuid) && Kotlin.equals(this.first, other.first) && Kotlin.equals(this.player, other.player) && Kotlin.equals(this.opponent, other.opponent) && Kotlin.equals(this.mode, other.mode) && Kotlin.equals(this.season, other.season) && Kotlin.equals(this.rank, other.rank) && Kotlin.equals(this.legend, other.legend) && Kotlin.equals(this.win, other.win)))));
  };
  function PatchType(name, ordinal) {
    PatchType$Companion_getInstance();
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PatchType_initFields() {
    PatchType_initFields = function () {
    };
    PatchType$BALANCE_instance = new PatchType('BALANCE', 0);
    PatchType$REWARD_instance = new PatchType('REWARD', 1);
    PatchType$SET_instance = new PatchType('SET', 2);
    PatchType$UNKNOWN_instance = new PatchType('UNKNOWN', 3);
  }
  var PatchType$BALANCE_instance;
  function PatchType$BALANCE_getInstance() {
    PatchType_initFields();
    return PatchType$BALANCE_instance;
  }
  var PatchType$REWARD_instance;
  function PatchType$REWARD_getInstance() {
    PatchType_initFields();
    return PatchType$REWARD_instance;
  }
  var PatchType$SET_instance;
  function PatchType$SET_getInstance() {
    PatchType_initFields();
    return PatchType$SET_instance;
  }
  var PatchType$UNKNOWN_instance;
  function PatchType$UNKNOWN_getInstance() {
    PatchType_initFields();
    return PatchType$UNKNOWN_instance;
  }
  function PatchType$Companion() {
    PatchType$Companion_instance = this;
  }
  PatchType$Companion.prototype.of_61zpoe$ = function (value) {
    var tmp$;
    var name = replace(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = value) ? tmp$ : Kotlin.throwCCE()).toString().toUpperCase(), ' ', '_');
    var $receiver = PatchType$values();
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$($receiver.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
      var item = $receiver[tmp$_0];
      destination.add_11rb$(item.name);
    }
    return destination.contains_11rb$(name) ? PatchType$valueOf(name) : PatchType$UNKNOWN_getInstance();
  };
  PatchType$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PatchType$Companion_instance = null;
  function PatchType$Companion_getInstance() {
    if (PatchType$Companion_instance === null) {
      new PatchType$Companion();
    }
    return PatchType$Companion_instance;
  }
  PatchType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PatchType',
    interfaces: [Enum]
  };
  function PatchType$values() {
    return [PatchType$BALANCE_getInstance(), PatchType$REWARD_getInstance(), PatchType$SET_getInstance(), PatchType$UNKNOWN_getInstance()];
  }
  PatchType.values = PatchType$values;
  function PatchType$valueOf(name) {
    switch (name) {
      case 'BALANCE':
        return PatchType$BALANCE_getInstance();
      case 'REWARD':
        return PatchType$REWARD_getInstance();
      case 'SET':
        return PatchType$SET_getInstance();
      case 'UNKNOWN':
        return PatchType$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.PatchType.' + name);
    }
  }
  PatchType.valueOf_61zpoe$ = PatchType$valueOf;
  function PatchChange(attr, set, shortName, change) {
    this.attr = attr;
    this.set = set;
    this.shortName = shortName;
    this.change = change;
  }
  PatchChange.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PatchChange',
    interfaces: []
  };
  function Patch(uuidDate, date, desc, legendsDeck, type, changes) {
    this.uuidDate = uuidDate;
    this.date = date;
    this.desc = desc;
    this.legendsDeck = legendsDeck;
    this.type = type;
    this.changes = changes;
  }
  Patch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Patch',
    interfaces: []
  };
  Patch.prototype.component1 = function () {
    return this.uuidDate;
  };
  Patch.prototype.component2 = function () {
    return this.date;
  };
  Patch.prototype.component3 = function () {
    return this.desc;
  };
  Patch.prototype.component4 = function () {
    return this.legendsDeck;
  };
  Patch.prototype.component5 = function () {
    return this.type;
  };
  Patch.prototype.component6 = function () {
    return this.changes;
  };
  Patch.prototype.copy_yydd9h$ = function (uuidDate, date, desc, legendsDeck, type, changes) {
    return new Patch(uuidDate === void 0 ? this.uuidDate : uuidDate, date === void 0 ? this.date : date, desc === void 0 ? this.desc : desc, legendsDeck === void 0 ? this.legendsDeck : legendsDeck, type === void 0 ? this.type : type, changes === void 0 ? this.changes : changes);
  };
  Patch.prototype.toString = function () {
    return 'Patch(uuidDate=' + Kotlin.toString(this.uuidDate) + (', date=' + Kotlin.toString(this.date)) + (', desc=' + Kotlin.toString(this.desc)) + (', legendsDeck=' + Kotlin.toString(this.legendsDeck)) + (', type=' + Kotlin.toString(this.type)) + (', changes=' + Kotlin.toString(this.changes)) + ')';
  };
  Patch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.uuidDate) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.desc) | 0;
    result = result * 31 + Kotlin.hashCode(this.legendsDeck) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.changes) | 0;
    return result;
  };
  Patch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.uuidDate, other.uuidDate) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.desc, other.desc) && Kotlin.equals(this.legendsDeck, other.legendsDeck) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.changes, other.changes)))));
  };
  function Month(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$JANUARY_instance = new Month('JANUARY', 0);
    Month$FEBRUARY_instance = new Month('FEBRUARY', 1);
    Month$MARCH_instance = new Month('MARCH', 2);
    Month$APRIL_instance = new Month('APRIL', 3);
    Month$MAY_instance = new Month('MAY', 4);
    Month$JUNE_instance = new Month('JUNE', 5);
    Month$JULY_instance = new Month('JULY', 6);
    Month$AUGUST_instance = new Month('AUGUST', 7);
    Month$SEPTEMBER_instance = new Month('SEPTEMBER', 8);
    Month$OCTOBER_instance = new Month('OCTOBER', 9);
    Month$NOVEMBER_instance = new Month('NOVEMBER', 10);
    Month$DECEMBER_instance = new Month('DECEMBER', 11);
  }
  var Month$JANUARY_instance;
  function Month$JANUARY_getInstance() {
    Month_initFields();
    return Month$JANUARY_instance;
  }
  var Month$FEBRUARY_instance;
  function Month$FEBRUARY_getInstance() {
    Month_initFields();
    return Month$FEBRUARY_instance;
  }
  var Month$MARCH_instance;
  function Month$MARCH_getInstance() {
    Month_initFields();
    return Month$MARCH_instance;
  }
  var Month$APRIL_instance;
  function Month$APRIL_getInstance() {
    Month_initFields();
    return Month$APRIL_instance;
  }
  var Month$MAY_instance;
  function Month$MAY_getInstance() {
    Month_initFields();
    return Month$MAY_instance;
  }
  var Month$JUNE_instance;
  function Month$JUNE_getInstance() {
    Month_initFields();
    return Month$JUNE_instance;
  }
  var Month$JULY_instance;
  function Month$JULY_getInstance() {
    Month_initFields();
    return Month$JULY_instance;
  }
  var Month$AUGUST_instance;
  function Month$AUGUST_getInstance() {
    Month_initFields();
    return Month$AUGUST_instance;
  }
  var Month$SEPTEMBER_instance;
  function Month$SEPTEMBER_getInstance() {
    Month_initFields();
    return Month$SEPTEMBER_instance;
  }
  var Month$OCTOBER_instance;
  function Month$OCTOBER_getInstance() {
    Month_initFields();
    return Month$OCTOBER_instance;
  }
  var Month$NOVEMBER_instance;
  function Month$NOVEMBER_getInstance() {
    Month_initFields();
    return Month$NOVEMBER_instance;
  }
  var Month$DECEMBER_instance;
  function Month$DECEMBER_getInstance() {
    Month_initFields();
    return Month$DECEMBER_instance;
  }
  Month.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$JANUARY_getInstance(), Month$FEBRUARY_getInstance(), Month$MARCH_getInstance(), Month$APRIL_getInstance(), Month$MAY_getInstance(), Month$JUNE_getInstance(), Month$JULY_getInstance(), Month$AUGUST_getInstance(), Month$SEPTEMBER_getInstance(), Month$OCTOBER_getInstance(), Month$NOVEMBER_getInstance(), Month$DECEMBER_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'JANUARY':
        return Month$JANUARY_getInstance();
      case 'FEBRUARY':
        return Month$FEBRUARY_getInstance();
      case 'MARCH':
        return Month$MARCH_getInstance();
      case 'APRIL':
        return Month$APRIL_getInstance();
      case 'MAY':
        return Month$MAY_getInstance();
      case 'JUNE':
        return Month$JUNE_getInstance();
      case 'JULY':
        return Month$JULY_getInstance();
      case 'AUGUST':
        return Month$AUGUST_getInstance();
      case 'SEPTEMBER':
        return Month$SEPTEMBER_getInstance();
      case 'OCTOBER':
        return Month$OCTOBER_getInstance();
      case 'NOVEMBER':
        return Month$NOVEMBER_getInstance();
      case 'DECEMBER':
        return Month$DECEMBER_getInstance();
      default:Kotlin.throwISE('No enum constant com.ediposouza.data.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function Season(id) {
    this.id = id;
    this.year$delegate = lazy(Season$year$lambda(this));
    this.month$delegate = lazy(Season$month$lambda(this));
  }
  Object.defineProperty(Season.prototype, 'year', {
    get: function () {
      var $receiver = this.year$delegate;
      new Kotlin.PropertyMetadata('year');
      return $receiver.value;
    }
  });
  Object.defineProperty(Season.prototype, 'month', {
    get: function () {
      var $receiver = this.month$delegate;
      new Kotlin.PropertyMetadata('month');
      return $receiver.value;
    }
  });
  function Season$year$lambda(this$Season) {
    return function () {
      return substringBefore(this$Season.id, '_');
    };
  }
  function Season$month$lambda(this$Season) {
    return function () {
      var monthIndex = toInt(substringAfter(this$Season.id, '_')) - 1 | 0;
      var $receiver = Month$values()[monthIndex].name.toLowerCase();
      return $receiver.length > 0 ? $receiver.substring(0, 1).toUpperCase() + $receiver.substring(1) : $receiver;
    };
  }
  Season.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Season',
    interfaces: []
  };
  Season.prototype.component1 = function () {
    return this.id;
  };
  Season.prototype.copy_61zpoe$ = function (id) {
    return new Season(id === void 0 ? this.id : id);
  };
  Season.prototype.toString = function () {
    return 'Season(id=' + Kotlin.toString(this.id) + ')';
  };
  Season.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  Season.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  var package$com = _.com || (_.com = {});
  var package$ediposouza = package$com.ediposouza || (package$com.ediposouza = {});
  package$ediposouza.addDeckClassIcons_ut8980$ = addDeckClassIcons;
  package$ediposouza.removeAllChilds_ejp6nk$ = removeAllChilds;
  package$ediposouza.foreach_kskzji$ = foreach;
  package$ediposouza.getString_fxvzox$ = getString;
  package$ediposouza.getInt_fxvzox$ = getInt;
  package$ediposouza.getBoolean_fxvzox$ = getBoolean;
  Object.defineProperty(package$ediposouza, 'UI', {
    get: UI_getInstance
  });
  Object.defineProperty(package$ediposouza, 'TESLEGENDS_DB_URL', {
    get: function () {
      return TESLEGENDS_DB_URL;
    }
  });
  Object.defineProperty(package$ediposouza, 'userID', {
    get: function () {
      return userID;
    },
    set: function (value) {
      userID = value;
    }
  });
  Object.defineProperty(package$ediposouza, 'userMatches', {
    get: function () {
      return userMatches;
    },
    set: function (value) {
      userMatches = value;
    }
  });
  Object.defineProperty(package$ediposouza, 'currentMode', {
    get: function () {
      return currentMode;
    },
    set: function (value) {
      currentMode = value;
    }
  });
  Object.defineProperty(package$ediposouza, 'currentSeason', {
    get: get_currentSeason,
    set: set_currentSeason
  });
  Object.defineProperty(package$ediposouza, 'resultAsWinRate', {
    get: function () {
      return resultAsWinRate;
    },
    set: function (value) {
      resultAsWinRate = value;
    }
  });
  package$ediposouza.Main = Main;
  Object.defineProperty(CardAttribute, 'STRENGTH', {
    get: CardAttribute$STRENGTH_getInstance
  });
  Object.defineProperty(CardAttribute, 'INTELLIGENCE', {
    get: CardAttribute$INTELLIGENCE_getInstance
  });
  Object.defineProperty(CardAttribute, 'WILLPOWER', {
    get: CardAttribute$WILLPOWER_getInstance
  });
  Object.defineProperty(CardAttribute, 'AGILITY', {
    get: CardAttribute$AGILITY_getInstance
  });
  Object.defineProperty(CardAttribute, 'ENDURANCE', {
    get: CardAttribute$ENDURANCE_getInstance
  });
  Object.defineProperty(CardAttribute, 'NEUTRAL', {
    get: CardAttribute$NEUTRAL_getInstance
  });
  Object.defineProperty(CardAttribute, 'DUAL', {
    get: CardAttribute$DUAL_getInstance
  });
  var package$data = package$ediposouza.data || (package$ediposouza.data = {});
  package$data.CardAttribute = CardAttribute;
  Object.defineProperty(CardSet, 'CORE', {
    get: CardSet$CORE_getInstance
  });
  Object.defineProperty(CardSet, 'MADHOUSE', {
    get: CardSet$MADHOUSE_getInstance
  });
  Object.defineProperty(CardSet, 'FALLOFTHEDARKBROTHERHOOD', {
    get: CardSet$FALLOFTHEDARKBROTHERHOOD_getInstance
  });
  Object.defineProperty(CardSet, 'TOKENS', {
    get: CardSet$TOKENS_getInstance
  });
  Object.defineProperty(CardSet, 'UNKNOWN', {
    get: CardSet$UNKNOWN_getInstance
  });
  Object.defineProperty(CardSet, 'Companion', {
    get: CardSet$Companion_getInstance
  });
  package$data.CardSet = CardSet;
  Object.defineProperty(CardRarity, 'COMMON', {
    get: CardRarity$COMMON_getInstance
  });
  Object.defineProperty(CardRarity, 'RARE', {
    get: CardRarity$RARE_getInstance
  });
  Object.defineProperty(CardRarity, 'EPIC', {
    get: CardRarity$EPIC_getInstance
  });
  Object.defineProperty(CardRarity, 'LEGENDARY', {
    get: CardRarity$LEGENDARY_getInstance
  });
  Object.defineProperty(CardRarity, 'UNKNOWN', {
    get: CardRarity$UNKNOWN_getInstance
  });
  Object.defineProperty(CardRarity, 'Companion', {
    get: CardRarity$Companion_getInstance
  });
  package$data.CardRarity = CardRarity;
  Object.defineProperty(CardType, 'ACTION', {
    get: CardType$ACTION_getInstance
  });
  Object.defineProperty(CardType, 'CREATURE', {
    get: CardType$CREATURE_getInstance
  });
  Object.defineProperty(CardType, 'ITEM', {
    get: CardType$ITEM_getInstance
  });
  Object.defineProperty(CardType, 'SUPPORT', {
    get: CardType$SUPPORT_getInstance
  });
  Object.defineProperty(CardType, 'UNKNOWN', {
    get: CardType$UNKNOWN_getInstance
  });
  Object.defineProperty(CardType, 'Companion', {
    get: CardType$Companion_getInstance
  });
  package$data.CardType = CardType;
  Object.defineProperty(CardRace, 'ARGONIAN', {
    get: CardRace$ARGONIAN_getInstance
  });
  Object.defineProperty(CardRace, 'BRETON', {
    get: CardRace$BRETON_getInstance
  });
  Object.defineProperty(CardRace, 'DARK_ELF', {
    get: CardRace$DARK_ELF_getInstance
  });
  Object.defineProperty(CardRace, 'HIGH_ELF', {
    get: CardRace$HIGH_ELF_getInstance
  });
  Object.defineProperty(CardRace, 'IMPERIAL', {
    get: CardRace$IMPERIAL_getInstance
  });
  Object.defineProperty(CardRace, 'KHAJIIT', {
    get: CardRace$KHAJIIT_getInstance
  });
  Object.defineProperty(CardRace, 'NORD', {
    get: CardRace$NORD_getInstance
  });
  Object.defineProperty(CardRace, 'ORC', {
    get: CardRace$ORC_getInstance
  });
  Object.defineProperty(CardRace, 'REDGUARD', {
    get: CardRace$REDGUARD_getInstance
  });
  Object.defineProperty(CardRace, 'WOOD_ELF', {
    get: CardRace$WOOD_ELF_getInstance
  });
  Object.defineProperty(CardRace, 'ASH_CREATURE', {
    get: CardRace$ASH_CREATURE_getInstance
  });
  Object.defineProperty(CardRace, 'BEAST', {
    get: CardRace$BEAST_getInstance
  });
  Object.defineProperty(CardRace, 'CENTAUR', {
    get: CardRace$CENTAUR_getInstance
  });
  Object.defineProperty(CardRace, 'CHAURUS', {
    get: CardRace$CHAURUS_getInstance
  });
  Object.defineProperty(CardRace, 'DAEDRA', {
    get: CardRace$DAEDRA_getInstance
  });
  Object.defineProperty(CardRace, 'DEFENSE', {
    get: CardRace$DEFENSE_getInstance
  });
  Object.defineProperty(CardRace, 'DRAGON', {
    get: CardRace$DRAGON_getInstance
  });
  Object.defineProperty(CardRace, 'DREUGH', {
    get: CardRace$DREUGH_getInstance
  });
  Object.defineProperty(CardRace, 'DWEMER', {
    get: CardRace$DWEMER_getInstance
  });
  Object.defineProperty(CardRace, 'FISH', {
    get: CardRace$FISH_getInstance
  });
  Object.defineProperty(CardRace, 'GIANT', {
    get: CardRace$GIANT_getInstance
  });
  Object.defineProperty(CardRace, 'GOBLIN', {
    get: CardRace$GOBLIN_getInstance
  });
  Object.defineProperty(CardRace, 'HARPY', {
    get: CardRace$HARPY_getInstance
  });
  Object.defineProperty(CardRace, 'IMP', {
    get: CardRace$IMP_getInstance
  });
  Object.defineProperty(CardRace, 'KWAMA', {
    get: CardRace$KWAMA_getInstance
  });
  Object.defineProperty(CardRace, 'LURCHER', {
    get: CardRace$LURCHER_getInstance
  });
  Object.defineProperty(CardRace, 'LYCANTHROPE', {
    get: CardRace$LYCANTHROPE_getInstance
  });
  Object.defineProperty(CardRace, 'MAMMOTH', {
    get: CardRace$MAMMOTH_getInstance
  });
  Object.defineProperty(CardRace, 'MANTIKORA', {
    get: CardRace$MANTIKORA_getInstance
  });
  Object.defineProperty(CardRace, 'MINOTAUR', {
    get: CardRace$MINOTAUR_getInstance
  });
  Object.defineProperty(CardRace, 'MUDCRAB', {
    get: CardRace$MUDCRAB_getInstance
  });
  Object.defineProperty(CardRace, 'MUMMY', {
    get: CardRace$MUMMY_getInstance
  });
  Object.defineProperty(CardRace, 'NEREID', {
    get: CardRace$NEREID_getInstance
  });
  Object.defineProperty(CardRace, 'OGRE', {
    get: CardRace$OGRE_getInstance
  });
  Object.defineProperty(CardRace, 'REPTILE', {
    get: CardRace$REPTILE_getInstance
  });
  Object.defineProperty(CardRace, 'REACHMAN', {
    get: CardRace$REACHMAN_getInstance
  });
  Object.defineProperty(CardRace, 'SKELETON', {
    get: CardRace$SKELETON_getInstance
  });
  Object.defineProperty(CardRace, 'SPIRIT', {
    get: CardRace$SPIRIT_getInstance
  });
  Object.defineProperty(CardRace, 'SPIDER', {
    get: CardRace$SPIDER_getInstance
  });
  Object.defineProperty(CardRace, 'SPRIGGAN', {
    get: CardRace$SPRIGGAN_getInstance
  });
  Object.defineProperty(CardRace, 'TROLL', {
    get: CardRace$TROLL_getInstance
  });
  Object.defineProperty(CardRace, 'VAMPIRE', {
    get: CardRace$VAMPIRE_getInstance
  });
  Object.defineProperty(CardRace, 'WOLF', {
    get: CardRace$WOLF_getInstance
  });
  Object.defineProperty(CardRace, 'WAMASU', {
    get: CardRace$WAMASU_getInstance
  });
  Object.defineProperty(CardRace, 'WRAITH', {
    get: CardRace$WRAITH_getInstance
  });
  Object.defineProperty(CardRace, 'UNKNOWN', {
    get: CardRace$UNKNOWN_getInstance
  });
  Object.defineProperty(CardRace, 'NONE', {
    get: CardRace$NONE_getInstance
  });
  Object.defineProperty(CardRace, 'Companion', {
    get: CardRace$Companion_getInstance
  });
  package$data.CardRace = CardRace;
  Object.defineProperty(CardKeyword, 'ACTIVATE', {
    get: CardKeyword$ACTIVATE_getInstance
  });
  Object.defineProperty(CardKeyword, 'BREAKTHROUGH', {
    get: CardKeyword$BREAKTHROUGH_getInstance
  });
  Object.defineProperty(CardKeyword, 'CHARGE', {
    get: CardKeyword$CHARGE_getInstance
  });
  Object.defineProperty(CardKeyword, 'COVER', {
    get: CardKeyword$COVER_getInstance
  });
  Object.defineProperty(CardKeyword, 'DRAIN', {
    get: CardKeyword$DRAIN_getInstance
  });
  Object.defineProperty(CardKeyword, 'EVOLVES', {
    get: CardKeyword$EVOLVES_getInstance
  });
  Object.defineProperty(CardKeyword, 'GUARD', {
    get: CardKeyword$GUARD_getInstance
  });
  Object.defineProperty(CardKeyword, 'LAST_GASP', {
    get: CardKeyword$LAST_GASP_getInstance
  });
  Object.defineProperty(CardKeyword, 'LETHAL', {
    get: CardKeyword$LETHAL_getInstance
  });
  Object.defineProperty(CardKeyword, 'PILFER', {
    get: CardKeyword$PILFER_getInstance
  });
  Object.defineProperty(CardKeyword, 'PROPHECY', {
    get: CardKeyword$PROPHECY_getInstance
  });
  Object.defineProperty(CardKeyword, 'REGENERATE', {
    get: CardKeyword$REGENERATE_getInstance
  });
  Object.defineProperty(CardKeyword, 'SHACKLE', {
    get: CardKeyword$SHACKLE_getInstance
  });
  Object.defineProperty(CardKeyword, 'SILENCE', {
    get: CardKeyword$SILENCE_getInstance
  });
  Object.defineProperty(CardKeyword, 'SUMMON', {
    get: CardKeyword$SUMMON_getInstance
  });
  Object.defineProperty(CardKeyword, 'WARD', {
    get: CardKeyword$WARD_getInstance
  });
  Object.defineProperty(CardKeyword, 'UNKNOWN', {
    get: CardKeyword$UNKNOWN_getInstance
  });
  Object.defineProperty(CardKeyword, 'Companion', {
    get: CardKeyword$Companion_getInstance
  });
  package$data.CardKeyword = CardKeyword;
  Object.defineProperty(CardArenaTier, 'TERRIBLE', {
    get: CardArenaTier$TERRIBLE_getInstance
  });
  Object.defineProperty(CardArenaTier, 'POOR', {
    get: CardArenaTier$POOR_getInstance
  });
  Object.defineProperty(CardArenaTier, 'AVERAGE', {
    get: CardArenaTier$AVERAGE_getInstance
  });
  Object.defineProperty(CardArenaTier, 'GOOD', {
    get: CardArenaTier$GOOD_getInstance
  });
  Object.defineProperty(CardArenaTier, 'EXCELLENT', {
    get: CardArenaTier$EXCELLENT_getInstance
  });
  Object.defineProperty(CardArenaTier, 'INSANE', {
    get: CardArenaTier$INSANE_getInstance
  });
  Object.defineProperty(CardArenaTier, 'UNKNOWN', {
    get: CardArenaTier$UNKNOWN_getInstance
  });
  Object.defineProperty(CardArenaTier, 'NONE', {
    get: CardArenaTier$NONE_getInstance
  });
  Object.defineProperty(CardArenaTier, 'Companion', {
    get: CardArenaTier$Companion_getInstance
  });
  package$data.CardArenaTier = CardArenaTier;
  package$data.CardArenaTierPlus = CardArenaTierPlus;
  Object.defineProperty(CardArenaTierPlusOperator, 'EQUALS', {
    get: CardArenaTierPlusOperator$EQUALS_getInstance
  });
  Object.defineProperty(CardArenaTierPlusOperator, 'GREAT', {
    get: CardArenaTierPlusOperator$GREAT_getInstance
  });
  Object.defineProperty(CardArenaTierPlusOperator, 'MINOR', {
    get: CardArenaTierPlusOperator$MINOR_getInstance
  });
  Object.defineProperty(CardArenaTierPlusOperator, 'UNKNOWN', {
    get: CardArenaTierPlusOperator$UNKNOWN_getInstance
  });
  Object.defineProperty(CardArenaTierPlusOperator, 'Companion', {
    get: CardArenaTierPlusOperator$Companion_getInstance
  });
  package$data.CardArenaTierPlusOperator = CardArenaTierPlusOperator;
  Object.defineProperty(CardArenaTierPlusType, 'ATTACK', {
    get: CardArenaTierPlusType$ATTACK_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'ATTR', {
    get: CardArenaTierPlusType$ATTR_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'COST', {
    get: CardArenaTierPlusType$COST_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'HEALTH', {
    get: CardArenaTierPlusType$HEALTH_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'KEYWORD', {
    get: CardArenaTierPlusType$KEYWORD_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'RACE', {
    get: CardArenaTierPlusType$RACE_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'STRATEGY', {
    get: CardArenaTierPlusType$STRATEGY_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'TEXT', {
    get: CardArenaTierPlusType$TEXT_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'TYPE', {
    get: CardArenaTierPlusType$TYPE_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'UNKNOWN', {
    get: CardArenaTierPlusType$UNKNOWN_getInstance
  });
  Object.defineProperty(CardArenaTierPlusType, 'Companion', {
    get: CardArenaTierPlusType$Companion_getInstance
  });
  package$data.CardArenaTierPlusType = CardArenaTierPlusType;
  package$data.CardMissing = CardMissing;
  package$data.CardStatistic = CardStatistic;
  package$data.CardBasicInfo = CardBasicInfo;
  package$data.CardSlot = CardSlot;
  package$data.CardPick = CardPick;
  Object.defineProperty(Card, 'Companion', {
    get: Card$Companion_getInstance
  });
  package$data.Card = Card;
  Object.defineProperty(DeckClass, 'ARCHER', {
    get: DeckClass$ARCHER_getInstance
  });
  Object.defineProperty(DeckClass, 'ASSASSIN', {
    get: DeckClass$ASSASSIN_getInstance
  });
  Object.defineProperty(DeckClass, 'BATTLEMAGE', {
    get: DeckClass$BATTLEMAGE_getInstance
  });
  Object.defineProperty(DeckClass, 'CRUSADER', {
    get: DeckClass$CRUSADER_getInstance
  });
  Object.defineProperty(DeckClass, 'MAGE', {
    get: DeckClass$MAGE_getInstance
  });
  Object.defineProperty(DeckClass, 'MONK', {
    get: DeckClass$MONK_getInstance
  });
  Object.defineProperty(DeckClass, 'SCOUT', {
    get: DeckClass$SCOUT_getInstance
  });
  Object.defineProperty(DeckClass, 'SORCERER', {
    get: DeckClass$SORCERER_getInstance
  });
  Object.defineProperty(DeckClass, 'SPELLSWORD', {
    get: DeckClass$SPELLSWORD_getInstance
  });
  Object.defineProperty(DeckClass, 'WARRIOR', {
    get: DeckClass$WARRIOR_getInstance
  });
  Object.defineProperty(DeckClass, 'STRENGTH', {
    get: DeckClass$STRENGTH_getInstance
  });
  Object.defineProperty(DeckClass, 'INTELLIGENCE', {
    get: DeckClass$INTELLIGENCE_getInstance
  });
  Object.defineProperty(DeckClass, 'AGILITY', {
    get: DeckClass$AGILITY_getInstance
  });
  Object.defineProperty(DeckClass, 'WILLPOWER', {
    get: DeckClass$WILLPOWER_getInstance
  });
  Object.defineProperty(DeckClass, 'ENDURANCE', {
    get: DeckClass$ENDURANCE_getInstance
  });
  Object.defineProperty(DeckClass, 'NEUTRAL', {
    get: DeckClass$NEUTRAL_getInstance
  });
  var package$model = package$ediposouza.model || (package$ediposouza.model = {});
  package$model.DeckClass = DeckClass;
  Object.defineProperty(DeckType, 'AGGRO', {
    get: DeckType$AGGRO_getInstance
  });
  Object.defineProperty(DeckType, 'ARENA', {
    get: DeckType$ARENA_getInstance
  });
  Object.defineProperty(DeckType, 'COMBO', {
    get: DeckType$COMBO_getInstance
  });
  Object.defineProperty(DeckType, 'CONTROL', {
    get: DeckType$CONTROL_getInstance
  });
  Object.defineProperty(DeckType, 'MIDRANGE', {
    get: DeckType$MIDRANGE_getInstance
  });
  Object.defineProperty(DeckType, 'OTHER', {
    get: DeckType$OTHER_getInstance
  });
  Object.defineProperty(DeckType, 'Companion', {
    get: DeckType$Companion_getInstance
  });
  package$model.DeckType = DeckType;
  package$model.DeckUpdate = DeckUpdate;
  package$model.DeckComment = DeckComment;
  Object.defineProperty(Deck, 'Companion', {
    get: Deck$Companion_getInstance
  });
  package$model.Deck = Deck;
  Object.defineProperty(MatchMode, 'RANKED', {
    get: MatchMode$RANKED_getInstance
  });
  Object.defineProperty(MatchMode, 'CASUAL', {
    get: MatchMode$CASUAL_getInstance
  });
  Object.defineProperty(MatchMode, 'ARENA', {
    get: MatchMode$ARENA_getInstance
  });
  Object.defineProperty(MatchMode, 'PRATICE', {
    get: MatchMode$PRATICE_getInstance
  });
  package$data.MatchMode = MatchMode;
  package$data.MatchDeck = MatchDeck;
  Object.defineProperty(Match, 'Companion', {
    get: Match$Companion_getInstance
  });
  package$data.Match = Match;
  Object.defineProperty(PatchType, 'BALANCE', {
    get: PatchType$BALANCE_getInstance
  });
  Object.defineProperty(PatchType, 'REWARD', {
    get: PatchType$REWARD_getInstance
  });
  Object.defineProperty(PatchType, 'SET', {
    get: PatchType$SET_getInstance
  });
  Object.defineProperty(PatchType, 'UNKNOWN', {
    get: PatchType$UNKNOWN_getInstance
  });
  Object.defineProperty(PatchType, 'Companion', {
    get: PatchType$Companion_getInstance
  });
  package$data.PatchType = PatchType;
  package$data.PatchChange = PatchChange;
  package$data.Patch = Patch;
  Object.defineProperty(Month, 'JANUARY', {
    get: Month$JANUARY_getInstance
  });
  Object.defineProperty(Month, 'FEBRUARY', {
    get: Month$FEBRUARY_getInstance
  });
  Object.defineProperty(Month, 'MARCH', {
    get: Month$MARCH_getInstance
  });
  Object.defineProperty(Month, 'APRIL', {
    get: Month$APRIL_getInstance
  });
  Object.defineProperty(Month, 'MAY', {
    get: Month$MAY_getInstance
  });
  Object.defineProperty(Month, 'JUNE', {
    get: Month$JUNE_getInstance
  });
  Object.defineProperty(Month, 'JULY', {
    get: Month$JULY_getInstance
  });
  Object.defineProperty(Month, 'AUGUST', {
    get: Month$AUGUST_getInstance
  });
  Object.defineProperty(Month, 'SEPTEMBER', {
    get: Month$SEPTEMBER_getInstance
  });
  Object.defineProperty(Month, 'OCTOBER', {
    get: Month$OCTOBER_getInstance
  });
  Object.defineProperty(Month, 'NOVEMBER', {
    get: Month$NOVEMBER_getInstance
  });
  Object.defineProperty(Month, 'DECEMBER', {
    get: Month$DECEMBER_getInstance
  });
  package$data.Month = Month;
  package$data.Season = Season;
  TESLEGENDS_DB_URL = 'https://tes-legends-assistant.firebaseio.com';
  userID = null;
  userMatches = null;
  currentMode = MatchMode$RANKED_getInstance();
  currentSeason = null;
  resultAsWinRate = false;
  Kotlin.defineModule('WabbaTrackWeb_main', _);
  return _;
}(typeof WabbaTrackWeb_main === 'undefined' ? {} : WabbaTrackWeb_main, kotlin);
