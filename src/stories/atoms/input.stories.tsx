import Input from '@/app/atoms/input';
import '../../app/globals.css'
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },
    tags: ['atoms'],
    argTypes: {
        changeValue: () => {},
        value: {
            defaultValue: ''
        }
    },
    render: (props: any) => {
        return (
            <div style={{
                backgroundColor: 'lightgrey',
                width: '90vw',
                height: '90vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {<Input {...props} />}
            </div>
        )
    }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
    args: {
        value: '',
        changeValue: () => {}
    }
};

export const InputWithText: Story = {
    args: {
        value: 'Exemple',
        changeValue: () => {}
    }
};
