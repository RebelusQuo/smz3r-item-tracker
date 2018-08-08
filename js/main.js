var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      width: 64px;\n      height: 64px;\n      position: relative;\n    '], ['\n      width: 64px;\n      height: 64px;\n      position: relative;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      filter: contrast(', '%)\n              brightness(', '%);\n    '], ['\n      filter: contrast(', '%)\n              brightness(', '%);\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n      position: absolute;\n    '], ['\n      position: absolute;\n    ']),
    _templateObject4 = _taggedTemplateLiteral(['\n      width: 32px;\n      position: absolute;\n    '], ['\n      width: 32px;\n      position: absolute;\n    ']),
    _templateObject5 = _taggedTemplateLiteral(['\n      right: 0;\n    '], ['\n      right: 0;\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n      display: table-cell;\n      font-weight: bold;\n      text-shadow:\n        -2px -2px black,  0px -2px black,\n         2px -2px black,  2px  0px black,\n         2px  2px black,  0px  2px black,\n        -2px  2px black, -2px  0px black;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n              user-select: none;\n    '], ['\n      display: table-cell;\n      font-weight: bold;\n      text-shadow:\n        -2px -2px black,  0px -2px black,\n         2px -2px black,  2px  0px black,\n         2px  2px black,  0px  2px black,\n        -2px  2px black, -2px  0px black;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n              user-select: none;\n    ']),
    _templateObject7 = _taggedTemplateLiteral(['\n      position: absolute;\n      display: table;\n    '], ['\n      position: absolute;\n      display: table;\n    ']),
    _templateObject8 = _taggedTemplateLiteral(['\n      color: white;\n      font-size: 18px;\n      text-align: ', ';\n      vertical-align: ', ';\n    '], ['\n      color: white;\n      font-size: 18px;\n      text-align: ', ';\n      vertical-align: ', ';\n    ']),
    _templateObject9 = _taggedTemplateLiteral(['\n      display: table;\n    '], ['\n      display: table;\n    ']),
    _templateObject10 = _taggedTemplateLiteral(['\n      color: hsl(45, 100%, ', '%);\n      font-size: 24px;\n      text-align: center;\n      vertical-align: bottom;\n    '], ['\n      color: hsl(45, 100%, ', '%);\n      font-size: 24px;\n      text-align: center;\n      vertical-align: bottom;\n    ']),
    _templateObject11 = _taggedTemplateLiteral(['\n      color: hsl(45, 100%, ', '%);\n      font-size: 24px;\n      text-align: right;\n      vertical-align: bottom;\n    '], ['\n      color: hsl(45, 100%, ', '%);\n      font-size: 24px;\n      text-align: right;\n      vertical-align: bottom;\n    ']),
    _templateObject12 = _taggedTemplateLiteral(['\n      width: 32px;\n      height: 32px;\n      right: 0;\n      bottom: 0;\n      position: absolute;\n      filter: contrast(', '%)\n              brightness(', '%)\n              opacity(', '%);\n    '], ['\n      width: 32px;\n      height: 32px;\n      right: 0;\n      bottom: 0;\n      position: absolute;\n      filter: contrast(', '%)\n              brightness(', '%)\n              opacity(', '%);\n    ']),
    _templateObject13 = _taggedTemplateLiteral(['\n      width: 128px;\n      height: 128px;\n      position: relative;\n    '], ['\n      width: 128px;\n      height: 128px;\n      position: relative;\n    ']),
    _templateObject14 = _taggedTemplateLiteral(['\n      width: 128px;\n      height: 58px;\n    '], ['\n      width: 128px;\n      height: 58px;\n    ']),
    _templateObject15 = _taggedTemplateLiteral(['\n      width: 46px;\n      height: 70px;\n      bottom: 0;\n    '], ['\n      width: 46px;\n      height: 70px;\n      bottom: 0;\n    ']),
    _templateObject16 = _taggedTemplateLiteral(['\n      width: 42px;\n      height: 70px;\n      left: 46px;\n      bottom: 0;\n    '], ['\n      width: 42px;\n      height: 70px;\n      left: 46px;\n      bottom: 0;\n    ']),
    _templateObject17 = _taggedTemplateLiteral(['\n      width: 40px;\n      height: 70px;\n      right: 0;\n      bottom: 0;\n    '], ['\n      width: 40px;\n      height: 70px;\n      right: 0;\n      bottom: 0;\n    ']),
    _templateObject18 = _taggedTemplateLiteral(['\n      &:before,\n      &:after { content: " "; display: table; }\n      &:after { clear: both; }\n    '], ['\n      &:before,\n      &:after { content: " "; display: table; }\n      &:after { clear: both; }\n    ']),
    _templateObject19 = _taggedTemplateLiteral(['\n      position: relative; float: left;\n    '], ['\n      position: relative; float: left;\n    ']),
    _templateObject20 = _taggedTemplateLiteral(['\n      padding: 0 32px;\n    '], ['\n      padding: 0 32px;\n    ']);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {
  'use strict';

  var _styled = styled.default;

  var Slot = _styled.div(_templateObject);
  var ActiveItem = Slot.extend(_templateObject2, function (props) {
    return props.active ? 100 : 80;
  }, function (props) {
    return props.active ? 100 : 30;
  });
  var ActiveBaseItem = ActiveItem.extend(_templateObject3);

  var Item = function Item(props) {
    return React.createElement(ActiveItem, {
      className: classNames(props.name, props.value && props.name + '--active'),
      active: props.value,
      onClick: function onClick() {
        return props.onClick(props.name);
      } });
  };

  var LeveledItem = function LeveledItem(props) {
    return React.createElement(ActiveItem, {
      className: classNames(props.name, props.value && props.name + '--active-' + props.value),
      active: props.value,
      onClick: function onClick() {
        return props.onClick({ raise: props.name });
      },
      onContextMenu: function onContextMenu(e) {
        props.onClick({ lower: props.name });e.preventDefault();
      } });
  };

  var SplitItem = ActiveItem.extend(_templateObject4);
  var RightSplitItem = SplitItem.extend(_templateObject5);

  var SplitItems = function SplitItems(props) {
    var left_name = props.left_name,
        left_value = props.left_value,
        right_name = props.right_name,
        right_value = props.right_value;

    return React.createElement(
      Slot,
      null,
      React.createElement(SplitItem, {
        className: classNames(left_name, left_value && left_name + '--active'),
        active: left_value,
        onClick: function onClick() {
          return props.onClick(left_name);
        } }),
      React.createElement(RightSplitItem, {
        className: classNames(right_name, left_value && right_name + '--active'),
        active: right_value,
        onClick: function onClick() {
          return props.onClick(right_name);
        } })
    );
  };

  var StackedItems = function StackedItems(props) {
    var top_name = props.top_name,
        top_value = props.top_value,
        bottom_name = props.bottom_name,
        bottom_value = props.bottom_value;

    return React.createElement(
      Slot,
      null,
      React.createElement(ActiveBaseItem, {
        className: classNames(bottom_name, bottom_value && bottom_name + '--active'),
        active: bottom_value,
        onClick: function onClick() {
          return props.onClick(bottom_name);
        } }),
      React.createElement(SplitItem, {
        className: classNames(top_name, top_value && top_name + '--active'),
        active: top_value,
        onClick: function onClick() {
          return props.onClick(top_name);
        } })
    );
  };

  var OutlinedText = _styled.span(_templateObject6);

  var TextHolder = Slot.extend(_templateObject7);
  var MedallionText = OutlinedText.extend(_templateObject8, function (props) {
    return props.second ? 'right' : 'left';
  }, function (props) {
    return props.second ? 'bottom' : 'top';
  });

  var MedallionItem = function MedallionItem(props) {
    return React.createElement(
      Slot,
      {
        onClick: function onClick() {
          return props.onClick(props.name);
        },
        onContextMenu: function onContextMenu(e) {
          props.onAccess(props.name);e.preventDefault();
        } },
      React.createElement(ActiveBaseItem, {
        className: classNames(props.name, props.name && props.name + '--active'),
        active: props.value }),
      props.access.turtle && React.createElement(
        TextHolder,
        null,
        React.createElement(
          MedallionText,
          null,
          'TR'
        )
      ),
      props.access.mire && React.createElement(
        TextHolder,
        null,
        React.createElement(
          MedallionText,
          { second: true },
          'MM'
        )
      )
    );
  };

  var ActiveTextItem = ActiveItem.extend(_templateObject9);
  var AmmoText = OutlinedText.extend(_templateObject10, function (props) {
    return 50 * (1 + (props.grade || 1));
  });

  var AmmoItem = function AmmoItem(props) {
    return React.createElement(
      ActiveTextItem,
      {
        className: props.name,
        active: props.value,
        onClick: function onClick() {
          return props.onClick({ raise: props.name });
        },
        onContextMenu: function onContextMenu(e) {
          props.onClick({ lower: props.name });e.preventDefault();
        } },
      props.value ? React.createElement(
        AmmoText,
        { grade: props.grade },
        props.value * 5
      ) : null
    );
  };

  var TankText = OutlinedText.extend(_templateObject11, function (props) {
    return 50 * (1 + (props.grade || 1));
  });

  var TankItem = function TankItem(props) {
    return React.createElement(
      ActiveTextItem,
      {
        className: 'tank',
        active: props.value,
        onClick: function onClick() {
          return props.onClick({ raise: 'tank' });
        },
        onContextMenu: function onContextMenu(e) {
          props.onClick({ lower: 'tank' });e.preventDefault();
        } },
      props.value ? React.createElement(
        TankText,
        { grade: props.grade },
        props.value
      ) : null
    );
  };

  var Prize = _styled.div(_templateObject12, function (props) {
    return props.active ? 100 : 80;
  }, function (props) {
    return props.active ? 100 : 50;
  }, function (props) {
    return !props.assumed ? 100 : !props.active ? 80 : 60;
  });

  var Z3Boss = function Z3Boss(props) {
    var name = props.name;
    var _props$value = props.value,
        complete = _props$value.complete,
        prize = _props$value.prize;

    return React.createElement(
      Slot,
      null,
      React.createElement(ActiveBaseItem, {
        className: name,
        active: !complete,
        onClick: function onClick() {
          return props.onComplete(name);
        } }),
      React.createElement(Prize, {
        className: prize,
        active: complete,
        assumed: props.assumed && prize === 'crystal',
        onClick: function onClick() {
          return props.onPrize({ raise: name });
        },
        onContextMenu: function onContextMenu(e) {
          props.onPrize({ lower: name });e.preventDefault();
        } })
    );
  };

  var StyledGoldenFour = _styled.div(_templateObject13);
  var Statue = StyledGoldenFour.extend(_templateObject3);
  var RidleyTarget = Statue.extend(_templateObject14);
  var KraidTarget = Statue.extend(_templateObject15);
  var PhantoonTarget = Statue.extend(_templateObject16);
  var DraygonTarget = Statue.extend(_templateObject17);

  var GoldenFour = function GoldenFour(props) {
    var _props$value2 = props.value,
        ridley = _props$value2.ridley,
        kraid = _props$value2.kraid,
        phantoon = _props$value2.phantoon,
        draygon = _props$value2.draygon;

    return React.createElement(
      StyledGoldenFour,
      null,
      React.createElement(Statue, { className: 'golden-four' }),
      ridley.complete && React.createElement(Statue, { className: 'golden-four---ridley' }),
      kraid.complete && React.createElement(Statue, { className: 'golden-four---kraid' }),
      phantoon.complete && React.createElement(Statue, { className: 'golden-four---phantoon' }),
      draygon.complete && React.createElement(Statue, { className: 'golden-four---draygon' }),
      React.createElement(RidleyTarget, { onClick: function onClick() {
          return props.onClick('ridley');
        } }),
      React.createElement(KraidTarget, { onClick: function onClick() {
          return props.onClick('kraid');
        } }),
      React.createElement(PhantoonTarget, { onClick: function onClick() {
          return props.onClick('phantoon');
        } }),
      React.createElement(DraygonTarget, { onClick: function onClick() {
          return props.onClick('draygon');
        } })
    );
  };

  var GridRow = _styled.div(_templateObject18);
  var GridCell = _styled.div(_templateObject19);
  var GoldenFourCell = GridCell.extend(_templateObject20);

  var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = { items: items(), bosses: bosses(), medallions: medallions() }, _this.toggle = function (name) {
        var items = _this.state.items;
        _this.setState({ items: _extends({}, items, _defineProperty({}, name, !items[name])) });
      }, _this.level = function (_ref2) {
        var raise = _ref2.raise,
            lower = _ref2.lower;

        var name = raise || lower;
        var delta = raise ? 1 : -1;
        var items = _this.state.items;
        var modulo = 1 + items.limit[name];
        _this.setState({ items: _extends({}, items, _defineProperty({}, name, (items[name] + modulo + delta) % modulo)) });
      }, _this.medallion = function (name) {
        var medallions = _this.state.medallions;
        var medallion = medallions[name];
        _this.setState({ medallions: _extends({}, medallions, _defineProperty({}, name, {
            turtle: !medallion.turtle,
            mire: medallion.turtle != medallion.mire
          })) });
      }, _this.complete = function (name) {
        var bosses = _this.state.bosses;
        var boss = bosses[name];
        _this.setState({ bosses: _extends({}, bosses, _defineProperty({}, name, _extends({}, boss, { complete: !boss.complete }))) });
      }, _this.prize = function (_ref3) {
        var raise = _ref3.raise,
            lower = _ref3.lower;

        var name = raise || lower;
        var delta = raise ? 1 : -1;
        var bosses = _this.state.bosses;
        var boss = bosses[name];
        var index = prize_order.indexOf(boss.prize);
        var modulo = prize_order.length;
        _this.setState({ bosses: _extends({}, bosses, _defineProperty({}, name, _extends({}, boss, { prize: prize_order[(index + modulo + delta) % modulo]
          }))) });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
      key: 'render',
      value: function render() {
        var items = this.state.items;
        var bosses = this.state.bosses;
        var medallions = this.state.medallions;
        var assumed = this.assumed();
        return React.createElement(
          React.Fragment,
          null,
          React.createElement(
            GridRow,
            null,
            React.createElement(
              GridCell,
              null,
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'bow', value: items.bow, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'somaria', value: items.somaria, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'hookshot', value: items.hookshot, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(SplitItems, {
                    left_name: 'mushroom', left_value: items.mushroom,
                    right_name: 'powder', right_value: items.powder, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'book', value: items.book, onClick: this.toggle })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'firerod', value: items.firerod, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'icerod', value: items.icerod, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(MedallionItem, {
                    name: 'bombos', value: items.bombos, access: medallions.bombos,
                    onClick: this.toggle, onAccess: this.medallion })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(MedallionItem, {
                    name: 'ether', value: items.ether, access: medallions.ether,
                    onClick: this.toggle, onAccess: this.medallion })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(MedallionItem, {
                    name: 'quake', value: items.quake, access: medallions.quake,
                    onClick: this.toggle, onAccess: this.medallion })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'lamp', value: items.lamp, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'hammer', value: items.hammer, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(StackedItems, {
                    top_name: 'shovel', top_value: items.shovel,
                    bottom_name: 'flute', bottom_value: items.flute, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(StackedItems, {
                    top_name: 'byrna', top_value: items.byrna,
                    bottom_name: 'cape', bottom_value: items.cape, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'mirror', value: items.mirror, onClick: this.toggle })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(StackedItems, {
                    top_name: 'halfmagic', top_value: items.halfmagic,
                    bottom_name: 'bottle', bottom_value: items.bottle, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'boots', value: items.boots, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(LeveledItem, { name: 'glove', value: items.glove, onClick: this.level })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'flippers', value: items.flippers, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'moonpearl', value: items.moonpearl, onClick: this.toggle })
                )
              )
            ),
            React.createElement(
              GridCell,
              null,
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'armos', value: bosses.armos, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'lanmolas', value: bosses.lanmolas, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'moldorm', value: bosses.moldorm, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'helmasaur', value: bosses.helmasaur, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'arrghus', value: bosses.arrghus, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'mothula', value: bosses.mothula, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'agahnim', value: items.agahnim, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'blind', value: bosses.blind, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'kholdstare', value: bosses.kholdstare, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(LeveledItem, { name: 'sword', value: items.sword, onClick: this.level })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'vitreous', value: bosses.vitreous, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Z3Boss, { name: 'trinexx', value: bosses.trinexx, assumed: assumed,
                    onComplete: this.complete, onPrize: this.prize })
                )
              )
            )
          ),
          React.createElement(
            GridRow,
            null,
            React.createElement(
              GridCell,
              null,
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'charge', value: items.charge, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'ice', value: items.ice, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'wave', value: items.wave, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'plasma', value: items.plasma, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(TankItem, { value: items.tank, grade: this.tank_grade(), onClick: this.level })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'varia', value: items.varia, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'morph', value: items.morph, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'spring', value: items.spring, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'hijump', value: items.hijump, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'speed', value: items.speed, onClick: this.toggle })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'gravity', value: items.gravity, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'bomb', value: items.bomb, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'screw', value: items.screw, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'space', value: items.space, onClick: this.toggle })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(Item, { name: 'grapple', value: items.grapple, onClick: this.toggle })
                )
              )
            ),
            React.createElement(
              GridCell,
              null,
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(AmmoItem, { name: 'missile', value: items.missile, onClick: this.level })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(AmmoItem, { name: 'super', value: items.super, onClick: this.level })
                ),
                React.createElement(
                  GridCell,
                  null,
                  React.createElement(AmmoItem, { name: 'powerbomb', value: items.powerbomb, grade: items.powerbomb >= 2 ? 1 : .5, onClick: this.level })
                )
              ),
              React.createElement(
                GridRow,
                null,
                React.createElement(
                  GoldenFourCell,
                  null,
                  React.createElement(GoldenFour, { value: bosses, onClick: this.complete })
                )
              )
            )
          )
        );
      }
    }, {
      key: 'assumed',
      value: function assumed() {
        var count = _.transform(this.state.bosses, function (a, x) {
          return x.prize && _.update(a, x.prize, function (v) {
            return (v || 0) + 1;
          });
        });
        return !(count['crystal-red'] === 2 && count['pendant'] === 2 && count['pendant-green'] === 1);
      }
    }, {
      key: 'tank_grade',
      value: function tank_grade() {
        var mode = 'normal';
        var tank = this.state.items.tank;
        var grade = {
          1: { normal: 1 / 3, hard: 1 / 4 },
          2: { normal: 2 / 3, hard: 2 / 4 },
          3: { normal: 3 / 3, hard: 3 / 4 },
          4: { normal: 3 / 3, hard: 3 / 4 }
        }[tank];
        return grade ? grade[mode] : 1;
      }
    }]);

    return App;
  }(React.Component);

  var prize_order = ['crystal', 'pendant', 'pendant-green', 'crystal-red'];

  var items = function items() {
    return {
      bow: false,
      somaria: false,
      hookshot: false,
      mushroom: false,
      powder: false,
      book: false,
      firerod: false,
      icerod: false,
      bombos: false,
      ether: false,
      quake: false,
      lamp: false,
      hammer: false,
      shovel: false,
      flute: false,
      byrna: false,
      cape: false,
      mirror: false,
      halfmagic: false,
      bottle: false,
      boots: false,
      glove: 0,
      flippers: false,
      moonpearl: false,
      agahnim: false,
      sword: 0,
      charge: false,
      ice: false,
      wave: false,
      plasma: false,
      tank: 0,
      varia: false,
      gravity: false,
      morph: false,
      bomb: false,
      spring: false,
      screw: false,
      hijump: false,
      space: false,
      speed: false,
      grapple: false,
      missile: 0,
      super: 0,
      powerbomb: 0,
      limit: {
        glove: 2,
        sword: 2,
        tank: 18,
        missile: 40,
        super: 17,
        powerbomb: 10
      }
    };
  };

  var bosses = function bosses() {
    return {
      armos: { complete: false, prize: 'crystal' },
      lanmolas: { complete: false, prize: 'crystal' },
      moldorm: { complete: false, prize: 'crystal' },
      helmasaur: { complete: false, prize: 'crystal' },
      arrghus: { complete: false, prize: 'crystal' },
      mothula: { complete: false, prize: 'crystal' },
      blind: { complete: false, prize: 'crystal' },
      kholdstare: { complete: false, prize: 'crystal' },
      vitreous: { complete: false, prize: 'crystal' },
      trinexx: { complete: false, prize: 'crystal' },
      ridley: { complete: false },
      kraid: { complete: false },
      phantoon: { complete: false },
      draygon: { complete: false }
    };
  };

  var medallions = function medallions() {
    return {
      bombos: {},
      ether: {},
      quake: {}
    };
  };

  window.start = function () {
    ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
  };
})();