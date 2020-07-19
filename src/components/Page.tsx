import React from 'react';
import Counter from "./Counter";
import AddUser from "./AddUser";

interface IProps {
    title: string;
    id: number;
}

class Page extends React.Component<IProps, {}>{
    render() {

        return (
            <div>
                <div>{ this.props.title }</div>

                <Counter
                    pageId={this.props.id}
                />

                <AddUser
                    pageId={this.props.id}
                />

            </div>
        );
    }
}



export default Page;
