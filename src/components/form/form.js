import React, {useState} from 'react';
import BackgroundImage from "../form/images/Background.png"
import styled from "styled-components";
import {Container} from "../../ui/containers";
import {Subtitle, Text, Title} from "../../ui/typography";
import {Col, Hidden, Row, useScreenClass, Visible} from "react-grid-system";
import Button from "../../ui/button";
import emailValidate from "../../validators/emailValidate";
import axios from "../../api/axios";

const stylesForInput = {
    fontFamily: "Poppins, sans-serif",
    fontSize: "20px",
    border: "1px solid #757575",
    borderRadius: "6px",
    padding: "13px",
    width: "100%",
    backgroundColor: "transparent"
}

const Form = () => {

    const [drag, setDrag] = useState(false);
    const [fileToUpload, setFileToUpload] = useState("");
    const [errMsg, setErrMsg] = useState("")
    const [success, setSuccess] = useState(false)

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        comment: "",
        file: ""
    })

    const screenClass = useScreenClass()

    function dragStartH(e) {
        e.preventDefault();
        setDrag(true);
    }

    function dragLeaveH(e) {
        e.preventDefault();
        setDrag(false);
    }

    const fileInputId = "fileInput"
    const [fileInputText, setFileInputText] = useState("Download file");

    async function fileHandleOnDrop(e) {
        e.preventDefault();
        let arr = e.dataTransfer.files[0].name.split(".")
        let type = arr[arr.length - 1]
        if (type !== "doc" && type !== "docx" && type !== "pdf" && type !== "png" && type !== "jpg" && type !== "jpeg") {
            setErrMsg("wrong_format")
            setTimeout(() => setErrMsg(""), 5000)
            setDrag(false)
            return
        }
        let files = [...e.dataTransfer.files]
        setFileToUpload(files[0]);
        setFileInputText(files[0]?.name);
        let fileData = new FormData();
        fileData.append("file", files[0])
        let response = await fetch('https://uploader.ipst-dev.com/file/upload', {
            method: 'POST',
            body: fileData
        });
        let result = await response.json();
        setData({...data, file: result.url})
        setDrag(false);
    }

    async function fileHandle(e) {
        if (e.target.files[0]) {
            let files = [e.target.files[0]]
            setFileToUpload(files[0]);
            setFileInputText(files[0]?.name);
            let fileData = new FormData();
            fileData.append("file", files[0])
            let response = await fetch('https://uploader.ipst-dev.com/file/upload', {
                method: 'POST',
                body: fileData
            });
            let result = await response.json();
            setData({...data, file: result.url})
        } else {
            setFileInputText(prevState => prevState);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailValidate(data.email)) {
            setErrMsg("email")
            return
        }

        let reqObj = {
            name: data.name,
            email: data.email
        }

        if (data.phone !== "") {
            reqObj.phone = data.phone
        }

        if (data.comment !== "") {
            reqObj.comment = data.comment
        }

        if (data.file !== "") {
            reqObj.url = data.file
        }

        try {
            await axios.post("mail", reqObj);
            setErrMsg("")
            setData({
                name: "",
                email: "",
                phone: "",
                comment: "",
                file: ""
            })
            setFileInputText("Download file")
            setSuccess(true)
            setTimeout(() => setSuccess(false), 5000)
        } catch (err) {
            if (!err?.response) {
                setErrMsg('no_response')
            } else {
                setErrMsg('internal')
            }
            setTimeout(() => setErrMsg(""), 2000)
        }
    }

    return (
        <Background background={BackgroundImage} id={"form"}>
            <Container style={{padding: "65px 15px 50px 15px"}}>
                <Title style={{
                    textTransform: "uppercase",
                    color: "#58A0A3",
                    marginBottom: 30,
                    whiteSpace: "break-spaces"
                }}>
                    {['xl', 'xxl'].includes(screenClass) ? "share your idea" : "share your \nidea"}
                </Title>
                <Row>
                    <Col style={{marginBottom: 60}} md={5}>
                        <Subtitle style={{fontSize: 24, color: "#58A0A3", marginBottom: 20}}>
                            Contacts
                        </Subtitle>
                        <ModLink href={"mailto:mail@mail.com"}>
                            <Text>
                                mail@mail.com
                            </Text>
                        </ModLink>
                        <ModLink href={"tel:+61 822 555 41 74"}>
                            <Text>
                                +61 822 555 41 74
                            </Text>
                        </ModLink>
                    </Col>
                    <Col md={7}>
                        <Subtitle style={{
                            fontSize: 24,
                            color: "#58A0A3",
                            marginBottom: ['xl', 'xxl'].includes(screenClass) ? 30 : 20,
                            whiteSpace: "break-spaces"
                        }}>
                            Leave your application in the form and we{['xl', 'xxl'].includes(screenClass) ? "\n" : " "}will
                            definitely contact you
                        </Subtitle>
                        <form lang="es" onSubmit={handleSubmit}>
                            <Label>
                                Name
                            </Label>
                            <InputContainer>
                                <Input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}
                                       required style={stylesForInput} placeholder={"Your Name"}/>
                            </InputContainer>
                            <Label>
                                Email
                            </Label>
                            <InputContainer>
                                <Input name={"email"} type={"email"} value={data.email}
                                       onChange={(e) => {setData({...data, email: e.target.value}); setErrMsg("")}}
                                       required style={stylesForInput} placeholder={"Your Email"}/>
                                {errMsg === "email" && <Text style={{position: "absolute", bottom: -25, left: 0, right: 0, color: "red", fontSize: 15, margin: "0 auto",
                                width: "fit-content"}}>
                                    Incorrect email!
                                </Text>}
                            </InputContainer>
                            <Label>
                                Phone
                            </Label>
                            <InputContainer>
                                <Input type={"number"} value={data.phone}
                                       onChange={(e) => setData({...data, phone: e.target.value})}
                                       style={stylesForInput} placeholder={"Your Phone"}/>
                            </InputContainer>
                            <Visible xl xxl>
                                <Label>
                                    Leave a comment
                                </Label>
                                <InputContainer>
                                    <Textarea value={data.comment} onChange={(e) => setData({...data, comment: e.target.value})}
                                              style={stylesForInput} placeholder={"Comment"}/>
                                </InputContainer>
                            </Visible>
                            <Text style={{
                                textAlign: "center", marginBottom: ['xl', 'xxl'].includes(screenClass) ? 10 : 15,
                                marginTop: !['xl', 'xxl'].includes(screenClass) ? 15 : 0
                            }}>
                                or
                            </Text>
                            <div style={{position: "relative", marginBottom: 30}}>
                                <input file={fileToUpload} style={{opacity: 0, display: "none"}} id={fileInputId}
                                       onChange={e => fileHandle(e)} type={"file"}
                                       accept=".doc,.docx,.pdf,.png,.jpg,.jpeg"/>
                                <Visible xl xxl>
                                    {drag === true
                                        ? <FileInput style={{border: "2px solid black", transition: "all .5s ease"}}
                                                     onDragStart={e => dragStartH(e)}
                                                     onDragLeave={e => dragLeaveH(e)}
                                                     onDragOver={e => dragStartH(e)}
                                                     onDrop={e => fileHandleOnDrop(e)}
                                                     htmlFor={fileInputId}
                                                     text={fileInputText}
                                        >Drop file to upload it</FileInput>
                                        : <FileInput
                                            onDragStart={e => dragStartH(e)}
                                            onDragLeave={e => dragLeaveH(e)}
                                            onDragOver={e => dragStartH(e)}
                                            htmlFor={fileInputId}
                                        >{fileInputText}</FileInput>
                                    }
                                </Visible>
                                <Hidden xl xxl>
                                    <MobileFileInput onDragStart={e => dragStartH(e)}
                                                     onDragLeave={e => dragLeaveH(e)}
                                                     onDragOver={e => dragStartH(e)}
                                                     htmlFor={fileInputId}>
                                        {fileInputText}
                                    </MobileFileInput>
                                </Hidden>
                            </div>
                            {errMsg === "wrong_format" && <Text style={{position: "absolute", bottom: 55, left: 0, right: 0, color: "red",
                                fontSize: 15, margin: "0 auto", width: "fit-content"}}>
                                Only .doc .docx .pdf .png .jpg .jpeg files are allowed!
                            </Text>}
                            {success && <Text style={{position: "absolute", bottom: 55, left: 0, right: 0, color: "green", fontSize: 15, margin: "0 auto",
                                width: "fit-content"}}>
                                Success!
                            </Text>}
                            <Button padding={"12px 130px"} type="submit">
                                Send
                            </Button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Background>
    );
};

const InputContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  @media (max-width: 1199px) {
    margin-bottom: 15px;
  }
`;

const FileInput = styled.label`
  width: 100%;
  height: 130px;
  border: 3px dashed #75757580;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  color: #262626;
  cursor: pointer;
`

const MobileFileInput = styled.label`
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  text-decoration-line: underline;
  color: #58A0A3;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const Background = styled.div`
  background-image: url(${props => props.background});
  @media (min-width: 1199px) {
    background-repeat: round;
    background-size: 100%;
  }
`;

const ModLink = styled.a`
  text-decoration: none;
`;

const Label = styled(Text)`
  font-weight: 500;
  margin-bottom: 10px;
`;

const Input = styled.input`
  ::placeholder {
    color: #757575;
  }
`;

const Textarea = styled.textarea`
  resize: vertical;
  min-height: 180px;

  ::placeholder {
    color: #757575;
  }
`;

export default Form;