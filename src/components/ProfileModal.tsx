import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const aboutMeDB: {[index: string]: string} = {
    mike: "rendom 1",
    lucy: "rendom 2",
    tom: "rendom 3"
};

interface IProfileProps {
    name: string,
    img: string
}

export default class ProfileModal extends React.Component<IProfileProps> {
    render() {
        return (
            <Modal trigger={<Button color='teal' fluid size='large'>Show Modal</Button>}>
                <Modal.Header>{this.props.name.toUpperCase()}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.img} />
                <Modal.Description>
                    <Header>About Me</Header>
                    <p>{aboutMeDB[this.props.name]}</p>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}