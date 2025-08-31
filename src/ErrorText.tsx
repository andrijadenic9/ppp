type InfoProps = {
    message?: string;
};
function ErrorText({ message }: InfoProps) {
    return <p className="text-red-600">{message}</p>;
}

export default ErrorText;
