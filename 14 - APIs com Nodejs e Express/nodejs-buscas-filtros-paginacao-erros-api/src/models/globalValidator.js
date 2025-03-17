import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: value => value.trim().length > 0,
    message: "O campo '{PATH}' não pode ser vazio",
});

