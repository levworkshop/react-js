function Title(props) {
    const { mainTxt } = props;

    return (
        <header>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">
                    {mainTxt}
                </h1>
                {
                    props.children
                }
            </div>
        </header>
    );
}

export default Title;