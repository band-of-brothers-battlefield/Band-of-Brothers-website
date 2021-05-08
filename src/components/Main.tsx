import '../locales/config';
import { Switch, Route, Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import mainBackground from '../assets/img/0.png';
import curvedContainer from '../assets/svg/textContainer.svg';
import discord from '../assets/svg/discord.svg'
import secondBackground from '../assets/img/718645.jpg'
import { useTranslation } from 'react-i18next';
import ServerBox from './Servers'

const MainImage = styled.div`
    height: 120vh;
    width: 100vw;
    position: absolute;
    background-position: 35% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('${mainBackground}');
`

const CurvedImage = styled.div`
    height: 1145px;
    background-position: 35%;
    background-size: cover;
    margin-top: 70vh;
    padding-top: 30vh;
    background-image: url('${curvedContainer}');
    max-height: 70rem;
`

const SecondPart = styled.div`
    height: auto;
    width: 100vw;
    background-position: 100% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('${secondBackground}');
    z-index: -1;
    position: absolute;
    top: calc(70vh + 1145px);
    padding-top: 30rem;
`

const MainContainer = styled.div`
    margin-left: 25vw;
    top: 80vh;
    position: absolute;
`

const Container = styled.div`
    margin-left: 25vw;
` 

const Emoji = styled.span`
    position: absolute;
    left: -5.5rem;
`

const TextBox = styled.p`
    max-width: 40rem;
`

const BigSpacing = styled.div`
    margin-bottom: 10rem;
`

const Title = styled.h1`
    position: absolute;
    top: 1rem;
    left: 6rem;
    color: white;
`

const DonationBox = styled.div`
    background: #FFC8B7;
    border-width: 13px 25px;
    border-style: solid;
    border-color: #FFC8B7;
    margin-left: -25px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DonationField = styled.div`
    background: #FFFFFF;
    border-width: 13px 25px;
    border-style: solid;
    border-color: #FFFFFF;
    width: 45%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DonationButton = styled.button`

`

const DiscordBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`

const DiscordContainer = styled.div`
    margin-left: 20vw;
`

function Main() {
    const homePage = useLocation().pathname === "/"
    const { t } = useTranslation();
    return (
        <div>
            <MainImage>
                <CurvedImage/>
                <Title>Band of brothers</Title>
            </MainImage>
            
            <MainContainer>
                <h1><Emoji>🙋‍♂️</Emoji>Let's get acquainted</h1>
                <TextBox>
                    Band of Brothers is an old and well-known Battlefield clan, it founded in 2018.
                    We play mostly Battlefield 1 and maintaining in average five servers.
                    The servers is kick started every morning so you guys can enjoy a full server when you play.
                    In addition, there are active admins most of time and active Discord!
                    We are proud of our community and welcome to everyone who wants to join.
                </TextBox>
                <BigSpacing/>
                <h1><Emoji>💸</Emoji>Donations</h1>
                <TextBox>
                    Servers cost Us a lot of money. Anyone willing to donate to the clan can do so however any donations will help.
                    We are giving VIP Slots to those who donate at least 2 euros for one month!
                    BoB thank everyone who donates, all the money from donations/purchases we will spend only to upkeep those same server we all enjoy and love!
                </TextBox>

                <DonationBox>
                    <div>
                        <h3 style={{margin: 0}}>Make some magic</h3>
                        <p style={{margin: 0}}>Donate 2 or more euro and get VIP</p>
                    </div>
                    <DonationField>
                        <div><b>2</b> Euro</div>
                        <DonationButton>Donate </DonationButton>
                    </DonationField>
                </DonationBox>
            </MainContainer>

            <SecondPart>
                <DiscordContainer>
                    <DiscordBox>
                        <img src={discord}/>
                        <div style={{paddingLeft: "1rem", margin: 0}}>
                            <h2 style={{color: "white", margin: 0}}>Discord</h2>
                            <TextBox style={{color: "white", margin: 0}}>
                                We have an active Discord where you can find some useful information and friendly community. Our admins will always help you where!
                            </TextBox>
                        </div>
                    </DiscordBox>
                    
                    <iframe src="https://discord.com/widget?id=513749917567811586&theme=dark" width="350" height="500" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </DiscordContainer>
                <BigSpacing/>
                <Container>
                    <h2 style={{color: "white", margin: 0}}>Servers</h2>
                </Container>
                <ServerBox/>
            </SecondPart>
            

        </div>
    )
}

export default Main;