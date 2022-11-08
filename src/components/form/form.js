import React, {useContext, useEffect, useState} from 'react';
import BackgroundImage from "../form/images/Background.png"
import styled from "styled-components";
import {Container} from "../../ui/containers";
import {Subtitle, Text, Title} from "../../ui/typography";
import {Col, Hidden, Row, useScreenClass, Visible} from "react-grid-system";
import Button from "../../ui/button";
import emailValidate from "../../validators/emailValidate";
import axios from "../../api/axios";
import {Context, EN, ES, RU} from "../../context/context";

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

    const [lang] = useContext(Context);

    useEffect(() => {
        if(lang === ES)
            setFileInputText("Subir archivo")
        if(lang === EN)
            setFileInputText("Download file")
        if(lang === RU)
            setFileInputText("Загрузить файл")
    }, [lang])

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
    const [fileInputText, setFileInputText] = useState(lang === EN ? "Download file" : lang === ES ? "Subir archivo" : "Загрузить файл");

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

        if (data.name === "") {
            setErrMsg("name")
            return
        }

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
            setFileInputText(lang === EN ? "Download file" : lang === ES ? "Subir archivo" : "Загрузить файл")
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
                {lang === EN ? <Title style={{
                    textTransform: "uppercase",
                    color: "#58A0A3",
                    marginBottom: 30,
                    whiteSpace: "break-spaces"
                }}>
                    {['xl', 'xxl'].includes(screenClass) ? "share your idea" : "share your \nidea"}
                </Title>
                    : lang === ES ? <Title style={{
                            textTransform: "uppercase",
                            color: "#58A0A3",
                            marginBottom: 30,
                            whiteSpace: "break-spaces"
                        }}>
                            comparte tu idea
                        </Title>
                        : <Title style={{
                            textTransform: "uppercase",
                            color: "#58A0A3",
                            marginBottom: 30,
                            whiteSpace: "break-spaces"
                        }}>
                            поделитесь своей идеей
                        </Title> }
                <Row>
                    <Col style={{marginBottom: 60}} md={5}>
                        <Subtitle style={{fontSize: 24, color: "#58A0A3", marginBottom: 20}}>
                            {lang === EN ? "Contacts" : lang === ES ? "Contactos" : "Контакты"}
                        </Subtitle>
                        <ModLink href={"mailto:mail@mail.com"}>
                            <Text style={{width: "fit-content"}}>
                                mail@mail.com
                            </Text>
                        </ModLink>
                        <ModLink href={"tel:0403583584"}>
                            <Text style={{width: "fit-content"}}>
                                0403583584
                            </Text>
                        </ModLink>
                    </Col>
                    <Col md={7}>
                        {lang === EN ? <Subtitle style={{
                                fontSize: 24,
                                color: "#58A0A3",
                                marginBottom: ['xl', 'xxl'].includes(screenClass) ? 30 : 20,
                                whiteSpace: "break-spaces"
                            }}>
                                Leave your application in the form and we{['xl', 'xxl'].includes(screenClass) ? "\n" : " "}will
                                definitely contact you
                            </Subtitle>
                            : lang === ES ? <Subtitle style={{
                                    fontSize: 24,
                                    color: "#58A0A3",
                                    marginBottom: ['xl', 'xxl'].includes(screenClass) ? 30 : 20,
                                    whiteSpace: "break-spaces"
                                }}>
                                    Deje su solicitud en el formulario y definitivamente nos pondremos en contacto con usted
                                </Subtitle>
                                : <Subtitle style={{
                                    fontSize: 24,
                                    color: "#58A0A3",
                                    marginBottom: ['xl', 'xxl'].includes(screenClass) ? 30 : 20,
                                    whiteSpace: "break-spaces"
                                }}>
                                    Оставьте заявку в форме и мы обязательно{['xl', 'xxl'].includes(screenClass) ? "\n" : " "}свяжемся с вами
                                </Subtitle>}
                        <form onSubmit={handleSubmit}>
                            <Label>
                                {lang === EN ? "Name" : lang === ES ? "Nombre" : "Имя"}
                            </Label>
                            <InputContainer>
                                <Input type="text" value={data.name} onChange={(e) => {
                                    setData({...data, name: e.target.value});
                                    setErrMsg("")
                                }}
                                       style={stylesForInput}
                                       placeholder={lang === EN ? "Your Name" : lang === ES ? "Su nombre" : "Ваше имя"}/>
                                {errMsg === "name" && <Text style={{
                                    position: "absolute",
                                    bottom: -25,
                                    left: 0,
                                    right: 0,
                                    color: "red",
                                    fontSize: 15,
                                    margin: "0 auto",
                                    width: "fit-content"
                                }}>
                                    {lang === EN ? "Please, fill in your name" : lang === ES ? "Por favor, ponga su nombre" : "Пожалуйста, заполните ваше имя"}
                                </Text>}
                            </InputContainer>
                            <Label>
                                {lang === EN ? "Email" : lang === ES ? "Correo electrónico" : "Почта"}
                            </Label>
                            <InputContainer>
                                <Input name={"email"} value={data.email}
                                       onChange={(e) => {
                                           setData({...data, email: e.target.value});
                                           setErrMsg("")
                                       }}
                                       style={stylesForInput}
                                       placeholder={lang === EN ? "Your Email" : lang === ES ? "Tu Email" : "Ваш Email"}/>
                                {errMsg === "email" && <Text style={{
                                    position: "absolute",
                                    bottom: -25,
                                    left: 0,
                                    right: 0,
                                    color: "red",
                                    fontSize: 15,
                                    margin: "0 auto",
                                    width: "fit-content"
                                }}>
                                    {lang === EN ? "Incorrect email!" : lang === ES ? "¡Incorrecto email!" : "Неверный email!"}
                                </Text>}
                            </InputContainer>
                            <Label>
                                {lang === EN ? "Phone" : lang === ES ? "Número de teléfono" : "Номер телефона"}
                            </Label>
                            <InputContainer>
                                <Input type={"number"} value={data.phone}
                                       onChange={(e) => setData({...data, phone: e.target.value})}
                                       style={stylesForInput}
                                       placeholder={lang === EN ? "Your Phone" : lang === ES ? "Su número de teléfono" : "Ваш номер телефона"}/>
                            </InputContainer>
                            <Visible xl xxl>
                                <Label>
                                    {lang === EN ? "Leave a comment" : lang === ES ? "Deja un comentario" : "Оставьте комментарий"}
                                </Label>
                                <InputContainer>
                                    <Textarea value={data.comment}
                                              onChange={(e) => setData({...data, comment: e.target.value})}
                                              style={stylesForInput}
                                              placeholder={lang === EN ? "Comment" : lang === ES ? "Comentario" : "Комментарий"}/>
                                </InputContainer>
                            </Visible>
                            <Text style={{
                                textAlign: "center", marginBottom: ['xl', 'xxl'].includes(screenClass) ? 10 : 15,
                                marginTop: !['xl', 'xxl'].includes(screenClass) ? 15 : 0
                            }}>
                                {lang === EN ? "or" : lang === ES ? "o" : "или"}
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
                                        >{lang === EN ? "Drop file to upload it" : lang === ES ? "Soltar archivo para subirlo" : "Перетащите файл, чтобы загрузить его"}</FileInput>
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
                            {errMsg === "wrong_format" && <Text style={{
                                position: "absolute", bottom: 55, left: 0, right: 0, color: "red",
                                fontSize: 15, margin: "0 auto", width: "fit-content"
                            }}>
                                {lang === EN ? "Only .doc .docx .pdf .png .jpg .jpeg files are allowed!" :
                                    lang === ES ? "¡Solo se permiten archivos .doc .docx .pdf .png .jpg .jpeg!"
                                        : "Разрешены только файлы .doc .docx .pdf .png .jpg .jpeg!"}
                            </Text>}
                            {success && <Text style={{
                                position: "absolute",
                                bottom: 55,
                                left: 0,
                                right: 0,
                                color: "green",
                                fontSize: 15,
                                margin: "0 auto",
                                width: "fit-content"
                            }}>
                                {lang === EN ? "Success!" : lang === ES ? "¡Exitosamente!" : "Успешно!"}
                            </Text>}
                            <Button padding={"12px 130px"} type="submit">
                                {lang === EN ? "Send" : lang === ES ? "Enviar" : "Отправить"}
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
  display: block;
  width: fit-content;
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