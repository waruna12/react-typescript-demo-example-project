type GreetProps = {
    name: String,
    messageCount: number,
    isLoggedIn: boolean,
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>
                {
                    props.isLoggedIn ? `Hi ${props.name}, you have ${props.messageCount} messages for you`
                        :
                        `Welcome Guest`
                }

            </h2>
        </div>
    );
}