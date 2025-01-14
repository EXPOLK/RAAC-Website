import React from "react";

export default function Board(){
    const data = [
        {
            id:1,
            name:'Sithum Sankalpa',
            post:'Secretary',
            img:'/img/sithum.jpg',
        },
        {
            id:2,
            name:'Dimuthu Rupasinghe',
            post:'Secretary',
            img:'/img/dimuthu.jpg',
        },
        {
            id:3,
            name:'Chanupa Sasmitha',
            post:'Treasurer',
            img:'/img/chanupa.jpeg',
        }
    ]
    return(
        <div className="board">
            <div className="h-section">
                <h1 className="h">Board Of Officials</h1>
                <div className="h-underline"></div>
            </div>
            <div className="inner-board">
                <div className="president-section">
                    <div className="m-t"></div>
                    <h1 className="el-sec-name president-section-name">Rudam Dewmith</h1>
                    <h2 className="president-section-post">President</h2>
                </div>
                <div className="top-board">
                    {data.map((post)=>(
                        <div className="board-member-section" key={post.id}>
                            <div className="m-t"></div>
                            <h1 className="board-member-section-name el-sec-name">{post.name}</h1>
                            <h2 className="board-member-section-post">{post.post}</h2>
                            <img className="board-member-section-img" src={post.img}></img>
                        </div>
                    ))}
                    <div className="board-member-section" >
                            <div className="m-t"></div>
                            <h1 className="board-member-section-name el-sec-name">Sithum Kolamunna</h1>
                            <h2 className="board-member-section-post">Vice President</h2>
                    </div>
                    <div className="board-member-section" >
                        <div className="m-t"></div>
                        <h1 className="board-member-section-name el-sec-name">Sasiru Shamal</h1>
                        <h2 className="board-member-section-post">Asst. Secretary</h2>
                    </div>
                </div>
                <div className="other-board">
                    <div className="board-member-section">
                        <div className="m-t"></div>
                        <h1 className="board-member-section-name">Maduka Himanga</h1>
                        <h2 className="board-member-section-post">Asst. Treasurer</h2>
                    </div>
                    <div className="board-member-section">
                        <div className="m-t"></div>
                        <h1 className="board-member-section-name">Wenura Dissanayake</h1>
                        <h2 className="board-member-section-post">Technical Head</h2>
                    </div>
                    <div className="board-member-section">
                        <div className="m-t"></div>
                        <h1 className="board-member-section-name">Sahan Devinda</h1>
                        <h1 className="board-member-section-name">Ameesha Hansaka</h1>
                        <h2 className="board-member-section-post">Main Organizers</h2>
                    </div>
                    <div className="board-member-section">
                        <div className="m-t"></div>
                        <h1 className="board-member-section-name">Kalindu Edirisinghe</h1>   
                        <h2 className="board-member-section-post">Media Coordinator</h2>
                    </div>
                    <div className="board-member-section">
                        <div className="m-t"></div>
                        <h1 className="board-member-section-name">Madubhasitha Nimesh</h1>
                        <h1 className="board-member-section-name">Sihas Nandinu</h1>
                        <h2 className="board-member-section-post">Lecture Coordinators</h2>
                    </div>
                </div>
                <div className="board-member-section center-sec">
                    <div className="m-t"></div>
                    <h1 className="board-member-section-name el-sec-name">S.T.M.K De Seram</h1>
                    <h2 className="board-member-section-post">Teacher in Charge</h2>
                </div>
            </div>
        </div>
    )
}