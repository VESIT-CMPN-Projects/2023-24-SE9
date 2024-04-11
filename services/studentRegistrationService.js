import express from "express";
import db from "../config.js";

//function to register student :

const registerStudent = async (req,res) => {
    const { input, appId } = req.body;
    console.log(req.body);

    try {
        if(input.length == 12) {                    //if input is aadhaar.

            const query1 = `INSERT INTO nsp_st_reg (aadhaar_no, app_id)
                            VALUES ($1,$2)`
            const values1 = [input,appId];
            await db.query(query1,values1);
            const virtualIdResult = await db.query(`SELECT virtual_id FROM uidai_aadhar_det WHERE aadhar_no=$1`,[input]);
            const virtualId = virtualIdResult.rows[0].virtual_id;
            await db.query(`UPDATE nsp_st_reg
                            SET virtual_id=$1
                            WHERE aadhaar_no=$2`,[virtualId,input]);      //Updates the record by putting in virtual ID.
            const responseData = {
                success: true,
                message: "Aadhaar registered successfully!",
            }
            res.status(200).json(responseData);
        } else if (input.length == 16){             //if input is virtual ID.
            const query2 = `INSERT INTO nsp_st_reg (virtual_id, app_id)
                            VALUES ($1,$2)`
            const values2 = [input,appId];
            await db.query(query2,values2);
            const aadhaarNoResult = await db.query(`SELECT aadhar_no FROM uidai_aadhar_det WHERE virtual_id=$1`,[input]);
            const aadhaarNo = aadhaarNoResult.rows[0].aadhar_no;
            await db.query(`UPDATE nsp_st_reg
                            SET aadhaar_no=$1
                            WHERE virtual_id=$2`,[aadhaarNo,input]);      //Updates the record by putting in aadhaar number.
            const responseData = {
                success: true,
                message: "Virtual ID registered successfully!",
            }
            res.status(200).json(responseData);
        }
    } catch(error) {
        res.status(500).json({ error: "Error registering student "});
    }
}

export default registerStudent;
