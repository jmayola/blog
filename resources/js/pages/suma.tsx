type Res = {
    resultado: number
}
function suma(res : Res) {
    return (
        <div>
            <h1>Haz una suma</h1>
            <form action="/suma" method="post">
                <input
                    type="number"
                    name="num1"
                    placeholder="Numero 1"
                    aria-placeholder="Numero 1"
                    id=""
                />
                <input
                    type="number"
                    name="num2"
                    placeholder="Numero 2"
                    aria-placeholder="Numero 2"
                    id=""
                />
                <input type="submit" value="Send" />
            </form>
            <h3> { res && (<p>Resultado: {res.resultado}</p>)  }</h3>
        </div>
    );
}

export default suma;
