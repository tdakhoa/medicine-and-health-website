import * as React from "react";
import { MenuItem, ListSubheader, Box, InputLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "../Typography/Typography";

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

interface DropdownProps {
    label?: string;
    placeholder?: string;
    sx?: object;
}

const Dropdown = ({ label = "", placeholder = "", sx = {}, ...props }: DropdownProps) => {
    const [val, setValue] = React.useState("");
    const [showPlaceholder, setShowPlaceholder] = React.useState(true);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        setShowPlaceholder(!Boolean(event.target.value));
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
                    {MenuItems.map((item, id1) =>
                        item.title.map((e, id2) =>
                            id2 == 0 && item.title.length > 1 ? (
                                <ListSubheader sx={{ fontWeight: 800 }}>{e}</ListSubheader>
                            ) : (
                                <MenuItem value={e} key={id1} sx={{ pl: id2 > 0 ? 6 : "auto" }}>
                                    {e}
                                </MenuItem>
                            )
                        )
                    )}
                </Select>
            </FormControl>
        </Box>
    );
};

export default Dropdown;

const MenuItems = [
    {
        title: ["Thuốc", "Thuốc cấm lưu hành", "Thuốc khác"]
    },
    {
        title: ["Y học cổ truyền"]
    },
    {
        title: ["Tim mạch"]
    },
    {
        title: [
            "Bệnh học",
            "Nha khoa",
            "Nhi khoa",
            "Sản khoa",
            "Nội tiết",
            "Ung thư",
            "Tai - Mũi - Họng",
            "Cơ - Xương khớp",
            "Tâm thần",
            "Tiêu hoá"
        ]
    },
    {
        title: ["Thông tin y dược"]
    },
    {
        title: ["Pháp luật y tế"]
    }
];
