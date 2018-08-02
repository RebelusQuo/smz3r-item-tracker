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

    const StyledSplitItems = _styled.div`
      width: 64px;
      position: relative;
    `;
    const LeftSplitItem = StyledItem.extend`
      width: 32px;
      position: absolute;
    `;
    const RightSplitItem = StyledItem.extend`
      width: 32px;
      right: 0;
      position: absolute;
    `;

    const SplitItems = (props) => {
        const { left_name, left_value, right_name, right_value } = props;
        return <StyledSplitItems>
          <LeftSplitItem
            className={classNames(left_name, left_value && `${left_name}--active`)}
            active={left_value}
            onClick={() => props.onClick(left_name)} />
          <RightSplitItem
            className={classNames(right_name, left_value && `${right_name}--active`)}
            active={right_value}
            onClick={() => props.onClick(right_name)} />
        </StyledSplitItems>;
    }

    class App extends React.Component {
        state = { items: items() }
        
        render() {
            const items = this.state.items;
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
    }

    const items = () => {
        return {
            bow: false,
            glove: 0,
            mushroom: false,
            powder: false,
            limit: {
              glove: 2
            }
        };
    };

    window.start = function() {
        ReactDOM.render(<App/>, document.getElementById('app'));
    };
}());
