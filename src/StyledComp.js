import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Styles = {
    Authintication:{
        Auth:styled.div`
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            flex-direction: revert;
            align-items: center;
            justify-content: space-evenly;
        `,

        Left:styled.div`
            width: 35%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F9CAD2;
            border-radius: 30px;
        `,

        Right:styled.div`
            width: 60%;
            height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `,

        H2:styled.h2`
            font-family: Ondo;    
            font-size: 40px;
            font-weight: 600;
            letter-spacing: -2px;
            width: 100%;
            text-align: left;
            `,

        Form:styled.form`
            width:350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `,

        Input:styled.input`
            font-family: Ondo;
            // width: 350px;
            width:90%;
            height: 50px;
            background: #f8f9fb;
            padding: 0 0 0 40px;
            border: 1px solid #e9eaec;
            border-radius: 5px;
            margin-bottom: 20px;
            &:focus{
                outline-color: #8791ff;
            }`,
        Terms:styled.p`
            font-family: Ondo;
            font-size: 14px;
            font-weight: 400;
            color:#252525;
            width: 90%;
            text-align: left;
            > a{
                color:#6a75ff;
                font-weight:600;
                cursor:pointer;
            }
            `,
        Text:styled.p`
            font-family: Ondo;
            font-size: 14px;
            font-weight: 400;
            color:#252525;
            width: 90%;
            text-align: center;
            > button{
                font-family: Ondo;
                font-size:14px;
                background: none;
                border: none;
                color:#6a75ff;
                font-weight:600;
                cursor:pointer;
                &:focus{
                    outline: none;
                }
            }
            `,
        Submit:styled(motion.button)`
            width: 100%;
            height: 50px;
            font-family: Ondo;
            border-radius: 5px;
            border: none;
            background:#6a75ff;
            color:#fff;
            font-size:16px;
            cursor:pointer;
            &:focus{
                outline:none;
            }
        `,
        Error:styled(motion.span)`
            width: 100%;
            height:50px;
            font-family: Ondo;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius: 5px;
            background: #ff9b93;
            color: #ff4646;
            opacity:0;
        `,

        SuccessMessage:styled(motion.span)`
            width: 100%;
            height:50px;
            font-family: Ondo;
            display:flex;
            align-items:center;
            justify-content:center;
            border-radius: 5px;
            background: #99f3bd;
            color: #28df99;
            opacity:0;
        `
    },
    Google:{
        Button:styled(motion.button)`
            font-family: Ondo;
            width: 100%;
            height: 50px;
            margin: 20px 0;
            border: none;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fb;
            border: 1px solid #e9eaec;
            border-radius: 5px;
            cursor:pointer;
            -webkit-box-shadow: 0px 2px 23px -10px rgba(163,163,163,1);
            -moz-box-shadow: 0px 2px 23px -10px rgba(163,163,163,1);
            box-shadow: 0px 2px 23px -10px rgba(163,163,163,1);
            &:focus{
                outline-color: #8791ff;
            }
            `
    }
}