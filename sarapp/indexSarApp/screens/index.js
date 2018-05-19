import React, { Component } from 'react'
import { Container, Content, Text, Tab, Tabs, TabHeading, Icon} from 'native-base'

import Chats from './chat'
import Status from './status'

export default class indexSarApp extends Component{

    render(){
        return(
            <Container>
                <Tabs>
                    <Tab heading={ <TabHeading><Text>Chatting</Text></TabHeading>}>
                        <Chats />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Status</Text></TabHeading>}>
                        <Status />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="camera" /></TabHeading>}>
                        <Text>test 1</Text>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
} 