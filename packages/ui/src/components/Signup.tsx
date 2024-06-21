import { Button, Card, TextField, Typography } from "@mui/material";
import styled from '../../node_modules/@mui/styled-engine';
import { useState } from "react";


export function Signup(props: {
    onClick: (username: string, password: string) => void
}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return <div>
         <div style={{
            paddingTop: 70,
            marginBottom: 10,
            display: "flex",
            justifyContent: "center"
        }}>
            <Typography variant="h6">
                Welcome to Qtnotiks. Signup below.
            </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Card variant={"outlined"} style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    required
                />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                    required
                />
                <br /><br />
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                       props.onClick(email, password);
                    }}
                    style={{ 
                        // backgroundColor: "black", 
                        // color: "white", 
                        // fontSize: 16, 
                    }}
                >Signup</Button>
            </Card>
        </div>
    </div>
}