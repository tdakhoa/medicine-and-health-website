import React from "react";
import { MenuItem, ListSubheader, Box, InputLabel, FormControl, Select } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

import Typography from "../Typography/Typography";
import { homeData } from "../../constants";

const Dropdown = ({ label = "", placeholder = "", data, setData, sx = {}, ...props }: DropdownProps) => {
    const [val, setValue] = React.useState("");
    const [showPlaceholder, setShowPlaceholder] = React.useState(true);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        setShowPlaceholder(!Boolean(event.target.value));
        setData({ title: data.title, category: event.target.value, keyword: data.keyword, author: data.title });
    };

    return (
        <Box sx={{ ...sx }} {...props}>
            <Typography size="p" weight="bold" sx={{ marginBottom: "0.8rem" }}>
                {label}
            </Typography>
            <FormControl fullWidth sx={StyleDropdown}>
                <InputLabel
                    shrink={false}
                    sx={{ display: showPlaceholder ? "initial" : "none", color: "#B2B2B2 !important" }}>
                    {placeholder}
                </InputLabel>
                <Select value={val} onChange={handleChange} displayEmpty fullWidth MenuProps={MenuProps}>
                    <MenuItem disabled value="none">
                        <em>{placeholder}</em>
                    </MenuItem>
                    {homeData.slice(1, homeData.length - 1).map((e, id) =>
                        e.item.length > 0 ? (
                            <>
                                <ListSubheader key={id} sx={{ fontWeight: 800 }}>
                                    {e.title}
                                </ListSubheader>
                                {e.item.map((item, i) => (
                                    <MenuItem value={e.title} key={i} sx={{ pl: 6 }}>
                                        {item.title}
                                    </MenuItem>
                                ))}
                            </>
                        ) : (
                            <MenuItem value={e.title} key={id}>
                                {e.title}
                            </MenuItem>
                        )
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown;

interface Types {
    title: string;
    category: string;
    keyword: string;
    author: string;
}
interface DropdownProps {
    label?: string;
    placeholder?: string;
    sx?: object;
    setData: React.Dispatch<React.SetStateAction<{ title: string; category: string; keyword: string; author: string }>>;
    data: Types;
}

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 400
        }
    }
};

const StyleDropdown = {
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    "& label": {
        fontFamily: "'Nunito', san-serif"
    },
    "& fieldset": {
        border: "none",
        fontFamily: "'Nunito', san-serif"
    },
    "& .MuiSelect-select": {
        fontFamily: "'Nunito', san-serif"
    }
};
