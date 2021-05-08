import * as React from "react";
import '../locales/config';
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { GetStats } from "../api/GetStats"
import { useQuery } from 'react-query';
import { getLanguage } from "../locales/config";
import { frostbite3 } from "../api/static";

interface Region {
    region: string
}


interface IServerImage {
    background: string;
}

const ServerImage = styled.div<IServerImage>`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 48px;
    height: 48px;
    background-image: url('${props => props.background}');
    border-radius: 38px;
    margin-right: 1rem;
`

const Blur = styled.div`
    height: 100%;
    margin-top: -.8rem;
    border-radius: 38px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4872) 100%);
`

const Server = styled.div`
    background: #F2F2F2;
    border-radius: 20px;
    border-width: 13px 25px;
    border-style: solid;
    border-color: #F2F2F2;
    padding: .7rem 0 .7rem 0;
    margin: 1.7rem;
    display: flex;
    align-items: center;
`

const Title = styled.h2`
    color: white;
    padding-left: 2rem;
`

const ServerText = styled.h1`
    color: white;
    font-size: 1.2rem;
    text-align: center;
    padding-top: 1.5rem;
    line-height: 0;
`

function Region(props: Region) {
    const { isLoading: loading, isError: error, data: stats } = useQuery("servers" + props.region, () => GetStats.server(
        {game: "bf1", type: "servers", getter: "name", serverName: "bob", lang: getLanguage(), region: props.region}
    ))
    if (!loading&&!error) {
        if (stats.servers.length == 0) {
            return <div>resultNotFound</div>
        }
        return (
            <div>
                <Title>{props.region}</Title>
                {stats.servers.map((key: any, index: number) => {
                    let queue: number = undefined
                    queue = key.inQue
                    let queueString = ""
                    if (queue!==undefined && queue!==0) {
                        queueString = `[${queue}]`
                    }
                    return <Server key={index}>
                        <ServerImage background={key.url}>
                            <Blur>
                                <ServerText>{key.smallMode}</ServerText>
                            </Blur>
                        </ServerImage>
                        <b>{key.prefix}</b>
                        <b style={{marginLeft: "auto", paddingLeft: "1rem" }}>{key.playerAmount}/{key.maxPlayerAmount} {queueString}</b>
                    </Server>
                })}
            </div>
        )
    } else {
        return <div>Database down</div>
    }
}

const ServerTable = styled.div`
    display: flex;
    justify-content: space-evenly;
`

function Servers() {
    return (
        <ServerTable>
            <Region region="EU"/>
            <Region region="Asia"/>
        </ServerTable>
    )
}

export default Servers;