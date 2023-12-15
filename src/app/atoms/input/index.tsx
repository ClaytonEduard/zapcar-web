type Props = {
    value: string;
    changeValue: (value: string) => void
}

export default function Input({ value, changeValue }: Props){
    return (
        <input type="text" value={value} onChange={(event) => changeValue(event.target.value)} />
    )
}
