import React, { Component }from 'react';
import { ScrollView } from 'react-native';

import ExpenseEarningContainer from './ExpenseEarningContainer';
import SingleValueArea from './SingleValueArea';
import SingleTitleArea from './SingleTitleArea';

class MoolaHomeContainer extends Component {

    state = {};

    render() {
        return (
            <ScrollView>
                <ExpenseEarningContainer>
                    <SingleTitleArea addBorder={ true }>April 2017</SingleTitleArea>
                    <SingleValueArea title={ "Expense" } value={ "$170" } addBorder={ true } />
                    <SingleValueArea title={ "Earning" } value={ "$1.2K" } addBorder={ false } />
                </ExpenseEarningContainer>
            </ScrollView>
        )
    }
}

export default MoolaHomeContainer;
