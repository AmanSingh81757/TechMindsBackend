const { Schema } = require("mongoose");

const boardSchema = new Schema(
    {
        room: {
            type: Schema.Types.ObjectId,
            ref: "Room"
        },
        canvasData: {
            
        }
    }
)