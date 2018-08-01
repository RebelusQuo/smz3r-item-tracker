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

    class App extends React.Component {
        state = { items: items() }
        
        render() {
            const items = this.state.items;
            return <Item
              name="bow"
              value={items.bow}
              onClick={this.toggle} />;
        }

        toggle = (name) => {
            const items = this.state.items;
            this.setState({ items: { ...items, [name]: !items[name] } });
        }
    }

    const items = () => {
        return {
            bow: false
        };
    };

    window.start = function() {
        ReactDOM.render(<App/>, document.getElementById('app'));
    };
}());
