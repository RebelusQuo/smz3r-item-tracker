(function() {
    'use strict';

    const _styled = styled.default;

    const StyledItem = _styled.div`
      width: 64px;
      height: 64px;
      filter: contrast(${props => props.active ? 100 : 80}%)
              brightness(${props => props.active ? 100 : 30}%);
    `;
    
    const Item = (props) =>
      <StyledItem
        className={classNames(props.name, props.value && `${props.name}--active`)}
        active={props.value}
        onClick={() => props.onClick(props.name)} />;

    const LeveledItem = (props) =>
      <StyledItem
        className={classNames(props.name, props.value && `${props.name}--active-${props.value}`)}
        active={props.value}
        onClick={() => props.onClick({ raise: props.name })}
        onContextMenu={(e) => { props.onClick({ lower: props.name }); e.preventDefault(); }} />

    const Slot = _styled.div`
      width: 64px;
      height: 64px;
      position: relative;
    `;
    const SplitItem = StyledItem.extend`
      width: 32px;
      position: absolute;
    `;
    const RightSplitItem = SplitItem.extend`
      right: 0;
    `;

    const SplitItems = (props) => {
        const { left_name, left_value, right_name, right_value } = props;
        return <Slot>
          <SplitItem
            className={classNames(left_name, left_value && `${left_name}--active`)}
            active={left_value}
            onClick={() => props.onClick(left_name)} />
          <RightSplitItem
            className={classNames(right_name, left_value && `${right_name}--active`)}
            active={right_value}
            onClick={() => props.onClick(right_name)} />
        </Slot>;
    }

    const BaseItem = StyledItem.extend`
      position: absolute;
    `;

    const StackedItems = (props) => {
        const { top_name, top_value, bottom_name, bottom_value } = props;
        return <Slot>
          <BaseItem
            className={classNames(bottom_name, bottom_value && `${bottom_name}--active`)}
            active={bottom_value}
            onClick={() => props.onClick(bottom_name)} />
          <SplitItem
            className={classNames(top_name, top_value && `${top_name}--active`)}
            active={top_value}
            onClick={() => props.onClick(top_name)} />
        </Slot>;
    }

    const Prize = _styled.div`
      width: 32px;
      height: 32px;
      right: 0;
      bottom: 0;
      position: absolute;
      filter: contrast(${props => props.active ? 100 : 80}%)
              brightness(${props => props.active ? 100 : 50}%)
              opacity(${props => !props.assumed ? 100 : !props.active ? 80 : 60}%);
    `;

    const Z3Boss = (props) => {
        const name = props.name;
        const { complete, prize } = props.value;
        return <Slot>
          <BaseItem
            className={name}
            active={!complete}
            onClick={() => props.onComplete(name)} />
          <Prize
            className={prize}
            active={complete}
            assumed={props.assumed && prize === 'crystal'}
            onClick={() => props.onPrize({ raise: name })}
            onContextMenu={(e) => { props.onPrize({ lower: name }); e.preventDefault(); }} />
        </Slot>;
    };

    const StyledGoldenFour = _styled.div`
      width: 128px;
      height: 128px;
      position: relative;
    `;
    const Statue = StyledGoldenFour.extend`
      position: absolute;
    `;
    const RidleyTarget = _styled.div`
      width: 128px;
      height: 58px;
      position: absolute;
    `;
    const KraidTarget = _styled.div`
      width: 46px;
      height: 70px;
      bottom: 0;
      position: absolute;
    `;
    const PhantoonTarget = _styled.div`
      width: 42px;
      height: 70px;
      left: 46px;
      bottom: 0;
      position: absolute;
    `;
    const DraygonTarget = _styled.div`
      width: 40px;
      height: 70px;
      right: 0;
      bottom: 0;
      position: absolute;
    `;

    const GoldenFour = (props) => {
        const { ridley, kraid, phantoon, draygon } = props.value;
        return <StyledGoldenFour>
          <Statue className="golden-four" />
          {ridley.complete && <Statue className="golden-four---ridley" />}
          {kraid.complete && <Statue className="golden-four---kraid" />}
          {phantoon.complete && <Statue className="golden-four---phantoon" />}
          {draygon.complete && <Statue className="golden-four---draygon" />}
          <RidleyTarget onClick={() => props.onClick('ridley')} />
          <KraidTarget onClick={() => props.onClick('kraid')} />
          <PhantoonTarget onClick={() => props.onClick('phantoon')} />
          <DraygonTarget onClick={() => props.onClick('draygon')} />
        </StyledGoldenFour>;
    };

    class App extends React.Component {
        state = { items: items(), bosses: bosses() }
        
        render() {
            const items = this.state.items;
            const bosses = this.state.bosses;
            return <React.Fragment>
              <Item
                name="bow"
                value={items.bow}
                onClick={this.toggle} />
              <LeveledItem
                name="glove"
                value={items.glove}
                onClick={this.level} />
              <SplitItems
                left_name="mushroom" left_value={items.mushroom}
                right_name="powder" right_value={items.powder}
                onClick={this.toggle} />
              <StackedItems
                top_name="shovel" top_value={items.shovel}
                bottom_name="flute" bottom_value={items.flute}
                onClick={this.toggle} />
              <Z3Boss
                name="vitreous"
                value={bosses.vitreous}
                assumed={false}
                onComplete={this.complete}
                onPrize={this.prize} />
              <Z3Boss
                name="trinexx"
                value={bosses.trinexx}
                assumed={true}
                onComplete={this.complete}
                onPrize={this.prize} />
              <GoldenFour
                value={bosses}
                onClick={this.complete} />
            </React.Fragment>;
        }

        toggle = (name) => {
            const items = this.state.items;
            this.setState({ items: { ...items, [name]: !items[name] } });
        }

        level = ({ raise, lower }) => {
            const name = raise || lower;
            const delta = raise ? 1 : -1;
            const items = this.state.items;
            const modulo = 1 + items.limit[name];
            this.setState({ items: { ...items, [name]: (items[name] + modulo + delta) % modulo } });
        }

        complete = (name) => {
            const bosses = this.state.bosses;
            const boss = bosses[name];
            this.setState({ bosses: { ...bosses, [name]: { ...boss, complete: !boss.complete } } });
        }

        prize = ({ raise, lower }) => {
            const name = raise || lower;
            const delta = raise ? 1 : -1;
            const bosses = this.state.bosses;
            const boss = bosses[name];
            const index = prize_order.indexOf(boss.prize);
            const modulo = prize_order.length;
            this.setState({ bosses: {
                ...bosses, [name]: {
                    ...boss, prize: prize_order[(index + modulo + delta) % modulo]
                }
            } });
        }
    }

    const prize_order = ['crystal', 'pendant', 'pendant-green', 'crystal-red'];

    const items = () => {
        return {
            bow: false,
            glove: 0,
            mushroom: false,
            powder: false,
            shovel: false,
            flute: false,
            limit: {
              glove: 2
            }
        };
    };

    const bosses = () => {
        return {
            vitreous: { complete: false, prize: 'crystal-red' },
            trinexx: { complete: false, prize: 'crystal' },
            ridley: { complete: false },
            kraid: { complete: false },
            phantoon: { complete: false },
            draygon: { complete: false }
        };
    };

    window.start = function() {
        ReactDOM.render(<App/>, document.getElementById('app'));
    };
}());
