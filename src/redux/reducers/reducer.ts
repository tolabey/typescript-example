import I from 'immutable';

export default function reducers(state: any = I.Map(), action: any) {

    const data = I.fromJS(action.data)

    switch (action.type) {
        case 'COUNT':
            return state.setIn(['countedValues', data], state.getIn(['countedValues', data], 0) + 1);
        case 'ADD_USER':
            return state
                .setIn(
                    ['users', data.get('pageId', 0)],
                    state.getIn(['users', data.get('pageId', 0)], I.List()).push(data)
                )
        default:
            return state;
    }
}