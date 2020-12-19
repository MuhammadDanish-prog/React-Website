import React from 'react'

const Footer = () =>{
    const date= new Date().getFullYear()
    return(
        <>
        <footer className="w-100 bg-light text-center mt-5">
            <p>
            © {date} LemonTec . All Rights Reserved || Terms and Conditions
            </p>
        </footer>
        </>
    )
}

export default Footer