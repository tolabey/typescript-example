import React from 'react';
import { connect } from "react-redux";
import I from 'immutable';

interface IProps {
    pageId: number;
    count: (pageId: number) => any;
    countedValues: I.Map<number, number>;
}

class Counter extends React.PureComponent<IProps, {}>{

    render() {
        const { count, countedValues, pageId } = this.props;

        return (
            <div className="counter-container">
                <div className="counter">Count value: { countedValues.get(pageId, 0) } </div>
                <button
                    className="count-btn"
                    onClick={() => count(pageId)}
                >
                    {'Counter'}
                </button>
            </div>
        );
    }
}

function mapStateToProps(state: I.Map<any, any>){
    return {
        countedValues: state.get('countedValues', I.Map()),
    }
}

interface IAction {
    type: string;
    data?: any;
}

function mapDispatchToProps(dispatch: (action: IAction) => any) {
    return {
        count: (pageId: number) => dispatch({ type: 'COUNT', data: pageId })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
