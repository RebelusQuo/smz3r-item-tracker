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

    const TextHolder = Slot.extend`
      position: absolute;
      display: table;
    `;
    const OutlinedText = _styled.span`
      display: table-cell;
      font-weight: bold;
      text-shadow:
        -2px -2px black,  0px -2px black,
         2px -2px black,  2px  0px black,
         2px  2px black,  0px  2px black,
        -2px  2px black, -2px  0px black;
      -webkit-user-select: none;
         -moz-user-select: none;
              user-select: none;
    `;
    const MedallionText = OutlinedText.extend`
      color: white;
      font-size: 18px;
      text-align: ${props => props.second ? 'right' : 'left'};
      vertical-align: ${props => props.second ? 'bottom' : 'top'};
    `;

    const MedallionItem = (props) =>
      <Slot
        onClick={() => props.onClick(props.name)}
        onContextMenu={(e) => { props.onAccess(props.name); e.preventDefault(); }}>
        <BaseItem
          className={classNames(props.name, props.name && `${props.name}--active`)}
          active={props.value} />
        {props.access.turtle && <TextHolder><MedallionText>TR</MedallionText></TextHolder>}
        {props.access.mire && <TextHolder><MedallionText second={true}>MM</MedallionText></TextHolder>}
      </Slot>;

    const TextItem = StyledItem.extend`
      display: table;
    `;
    const AmmoText = OutlinedText.extend`
      color: white;
      font-size: 24px;
      text-align: center;
      vertical-align: bottom;
    `;

    const AmmoItem = (props) =>
      <TextItem
        className={props.name}
        active={props.value}
        onClick={() => props.onClick({ raise: props.name })}
        onContextMenu={(e) => { props.onClick({ lower: props.name }); e.preventDefault(); }}>
        {props.value ? <AmmoText>{props.value * 5}</AmmoText> : null}
      </TextItem>;

    const TankText = OutlinedText.extend`
      color: white;
      font-size: 24px;
      text-align: right;
      vertical-align: bottom;
    `;

    const TankItem = (props) =>
      <TextItem
        className="tank"
        active={props.value}
        onClick={() => props.onClick({ raise: 'tank' })}
        onContextMenu={(e) => { props.onClick({ lower: 'tank' }); e.preventDefault(); }}>
        {props.value ? <TankText>{props.value}</TankText> : null}
      </TextItem>

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

    const GridRow = _styled.div`
      &:before,
      &:after { content: " "; display: table; }
      &:after { clear: both; }
    `;
    const GridCell = _styled.div`
      position: relative; float: left;
    `;
    const GoldenFourCell = GridCell.extend`
      padding: 0 32px;
    `;

    class App extends React.Component {
        state = { items: items(), bosses: bosses(), medallions: medallions() }
        
        render() {
            const items = this.state.items;
            const bosses = this.state.bosses;
            const medallions = this.state.medallions;
            const assumed = this.assumed();
            return <React.Fragment>
              <GridRow>
                <GridCell>
                  <GridRow>
                    <GridCell><Item name="bow" value={items.bow} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="somaria" value={items.somaria} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="hookshot" value={items.hookshot} onClick={this.toggle} /></GridCell>
                    <GridCell>
                      <SplitItems
                        left_name="mushroom" left_value={items.mushroom}
                        right_name="powder" right_value={items.powder} onClick={this.toggle} />
                    </GridCell>
                    <GridCell><Item name="book" value={items.book} onClick={this.toggle} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><Item name="firerod" value={items.firerod} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="icerod" value={items.icerod} onClick={this.toggle} /></GridCell>
                    <GridCell>
                      <MedallionItem
                        name="bombos" value={items.bombos} access={medallions.bombos}
                        onClick={this.toggle} onAccess={this.medallion} /></GridCell>
                    <GridCell>
                      <MedallionItem
                        name="ether" value={items.ether} access={medallions.ether}
                        onClick={this.toggle} onAccess={this.medallion} /></GridCell>
                    <GridCell>
                      <MedallionItem
                        name="quake" value={items.quake} access={medallions.quake}
                        onClick={this.toggle} onAccess={this.medallion} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><Item name="lamp" value={items.lamp} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="hammer" value={items.hammer} onClick={this.toggle} /></GridCell>
                    <GridCell>
                      <StackedItems
                        top_name="shovel" top_value={items.shovel}
                        bottom_name="flute" bottom_value={items.flute} onClick={this.toggle} />
                    </GridCell>
                    <GridCell><StackedItems
                      top_name="byrna" top_value={items.byrna}
                      bottom_name="cape" bottom_value={items.cape} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="mirror" value={items.mirror} onClick={this.toggle} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell>
                      <StackedItems
                        top_name="halfmagic" top_value={items.halfmagic}
                        bottom_name="bottle" bottom_value={items.bottle} onClick={this.toggle} />
                    </GridCell>
                    <GridCell><Item name="boots" value={items.boots} onClick={this.toggle} /></GridCell>
                    <GridCell><LeveledItem name="glove" value={items.glove} onClick={this.level} /></GridCell>
                    <GridCell><Item name="flippers" value={items.flippers} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="moonpearl" value={items.moonpearl} onClick={this.toggle} /></GridCell>
                  </GridRow>
                </GridCell>
                <GridCell>
                  <GridRow>
                    <GridCell><Z3Boss name="armos" value={bosses.armos} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                    <GridCell><Z3Boss name="lanmolas" value={bosses.lanmolas} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                    <GridCell><Z3Boss name="moldorm" value={bosses.moldorm} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><Z3Boss name="helmasaur" value={bosses.helmasaur} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                    <GridCell><Z3Boss name="arrghus" value={bosses.arrghus} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                    <GridCell><Z3Boss name="mothula" value={bosses.mothula} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><Item name="agahnim" value={items.agahnim} onClick={this.toggle} /></GridCell>
                    <GridCell><Z3Boss name="blind" value={bosses.blind} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                    <GridCell><Z3Boss name="kholdstare" value={bosses.kholdstare} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><LeveledItem name="sword" value={items.sword} onClick={this.level} /></GridCell>
                    <GridCell><Z3Boss name="vitreous" value={bosses.vitreous} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                    <GridCell><Z3Boss name="trinexx" value={bosses.trinexx} assumed={assumed}
                      onComplete={this.complete} onPrize={this.prize} /></GridCell>
                  </GridRow>
                </GridCell>
              </GridRow>
              <GridRow>
                <GridCell>
                  <GridRow>
                    <GridCell><Item name="charge" value={items.charge} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="ice" value={items.ice} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="wave" value={items.wave} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="plasma" value={items.plasma} onClick={this.toggle} /></GridCell>
                    <GridCell><TankItem value={items.tank} onClick={this.level} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><Item name="varia" value={items.varia} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="morph" value={items.morph} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="spring" value={items.spring} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="hijump" value={items.hijump} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="speed" value={items.speed} onClick={this.toggle} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GridCell><Item name="gravity" value={items.gravity} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="bomb" value={items.bomb} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="screw" value={items.screw} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="space" value={items.space} onClick={this.toggle} /></GridCell>
                    <GridCell><Item name="grapple" value={items.grapple} onClick={this.toggle} /></GridCell>
                  </GridRow>
                </GridCell>
                <GridCell>
                  <GridRow>
                    <GridCell><AmmoItem name="missile" value={items.missile} onClick={this.level} /></GridCell>
                    <GridCell><AmmoItem name="super" value={items.super} onClick={this.level} /></GridCell>
                    <GridCell><AmmoItem name="powerbomb" value={items.powerbomb} onClick={this.level} /></GridCell>
                  </GridRow>
                  <GridRow>
                    <GoldenFourCell><GoldenFour value={bosses} onClick={this.complete} /></GoldenFourCell>
                  </GridRow>
                </GridCell>
              </GridRow>
            </React.Fragment>;
        }

        assumed() {
            const count = _.transform(this.state.bosses,
                (a, x) => x.prize && _.update(a, x.prize, v => (v||0) + 1));
            return !(
                count['crystal-red'] === 2 &&
                count['pendant'] === 2 &&
                count['pendant-green'] === 1
            );
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

        medallion = (name) => {
            const medallions = this.state.medallions;
            const medallion = medallions[name];
            this.setState({ medallions: {
              ...medallions, [name]: {
                turtle: !medallion.turtle,
                mire: medallion.turtle != medallion.mire
              }
            } });
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

    const bosses = () => {
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

    const medallions = () => {
        return {
            bombos: {},
            ether: {},
            quake: {}
        };
    };

    window.start = function() {
        ReactDOM.render(<App/>, document.getElementById('app'));
    };
}());
