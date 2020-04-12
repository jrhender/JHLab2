const AboutMe = () => {
    return (
        <>
            <h2 style={{marginBottom: '0px'}}>Welcome</h2>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <p style={{}}>
                Hello! I'm John and welcome to my website.<br/>
                It's a collection of my thoughts and musings. Please enjoy!
            </p>
            <img src='/myFace.jpg' style={{height: '80px', borderRadius: '40%', marginLeft: '10px'}}/>
            </div>
        </>
    )
}

export default AboutMe;