import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function QuoteMachine(props) {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchQuote()
            .catch(console.error);
    }, []);

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote(data);
    }

    return (
        <>
            {quote ? (
                <Card id="quote-box">
                    <Card.Body>
                        <Card.Title id="text">{quote.content}</Card.Title>
                        <div id="author">{quote.author}</div>
                    </Card.Body>
                    <Button id="new-quote" onClick={() => fetchQuote()}>Next Quote</Button>
                    <a id="tweet-quote" href={encodeURI(`https://twitter.com/intent/tweet?text=${quote.content}&hashtags=RandomQuoteMachine`)} target="_blank" rel="noopener noreferrer">Tweet Quote</a>
                </Card>
            ) : <p>Loading</p>
            }
        </>
    );
}