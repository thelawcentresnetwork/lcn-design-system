import React from 'react'

import {
    FormControl,
    InputGroup,
    InputLeftAddon,
    FormErrorMessage,
    Box,
    Input,
    FormLabel
} from "@chakra-ui/react";

import { useController } from "react-hook-form";
import { useRef } from "react";
import ChakraAwesome from '../../utilities/ChakraAwesome';

export function humanFileSize(bytes, si = false, dp = 1) {
    const thresh = si ? 1000 : 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }

    const units = si
        ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    let u = -1;
    const r = 10 ** dp;

    do {
        bytes /= thresh;
        ++u;
    } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


    return bytes.toFixed(dp) + ' ' + units[u];
}

export function whitelisted(file) {
    var whitelist = [
        "image/jpeg",
        "image/jpeg",
        "image/gif",
        "image/png",
        "image/bmp",
        "image/tiff",
        "image/tiff",
        "image/x-icon",
        "image/svg+xml",
        "video/x-ms-asf",
        "video/x-ms-asf",
        "video/x-ms-wmv",
        "video/x-ms-wmx",
        "video/x-ms-wm",
        "video/avi",
        "video/divx",
        "video/x-flv",
        "video/quicktime",
        "video/quicktime",
        "video/mpeg",
        "video/mpeg",
        "video/mpeg",
        "video/mp4",
        "video/mp4",
        "video/ogg",
        "video/webm",
        "video/x-matroska",
        "video/3gpp",
        "video/3gpp",
        "video/3gpp2",
        "video/3gpp2",
        "text/plain",
        "text/csv",
        "text/tab-separated-values",
        "text/calendar",
        "text/richtext",
        "application/ttaf+xml",
        "audio/mpeg",
        "audio/mpeg",
        "audio/mpeg",
        "audio/x-realaudio",
        "audio/x-realaudio",
        "audio/wav",
        "audio/ogg",
        "audio/ogg",
        "audio/midi",
        "audio/midi",
        "audio/x-ms-wma",
        "audio/x-ms-wax",
        "audio/x-matroska",
        "application/rtf",
        "application/pdf",
        "application/x-tar",
        "application/zip",
        "application/x-gzip",
        "application/x-gzip",
        "application/rar",
        "application/x-7z-compressed",
        "application/octet-stream",
        "application/octet-stream",
        "application/postscript",
        "application/x-indesign",
        "application/msword",
        "application/vnd.ms-powerpoint",
        "application/vnd.ms-powerpoint",
        "application/vnd.ms-powerpoint",
        "application/vnd.ms-write",
        "application/vnd.ms-excel",
        "application/vnd.ms-excel",
        "application/vnd.ms-excel",
        "application/vnd.ms-excel",
        "application/vnd.ms-access",
        "application/vnd.ms-project",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-word.document.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
        "application/vnd.ms-word.template.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel.sheet.macroEnabled.12",
        "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
        "application/vnd.ms-excel.template.macroEnabled.12",
        "application/vnd.ms-excel.addin.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
        "application/vnd.ms-powerpoint.slideshow.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.presentationml.template",
        "application/vnd.ms-powerpoint.template.macroEnabled.12",
        "application/vnd.ms-powerpoint.addin.macroEnabled.12",
        "application/vnd.openxmlformats-officedocument.presentationml.slide",
        "application/vnd.ms-powerpoint.slide.macroEnabled.12",
        "application/onenote",
        "application/onenote",
        "application/onenote",
        "application/onenote",
        "application/oxps",
        "application/vnd.ms-xpsdocument",
        "application/vnd.oasis.opendocument.text",
        "application/vnd.oasis.opendocument.presentation",
        "application/vnd.oasis.opendocument.spreadsheet",
        "application/vnd.oasis.opendocument.graphics",
        "application/vnd.oasis.opendocument.chart",
        "application/vnd.oasis.opendocument.database",
        "application/vnd.oasis.opendocument.formula",
        "application/wordperfect",
        "application/wordperfect",
        "application/vnd.apple.keynote",
        "application/vnd.apple.numbers",
        "application/vnd.apple.pages"
    ]
    return whitelist.includes(file.type)
}

const File = ({
    name,
    placeholder,
    acceptedFileTypes,
    useForm,
    label,
    isRequired = false,
    ...groupProps }) => {

    const inputRef = useRef();

    const {
        field: { ref, onChange, value, ...inputProps },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
    } = useController({
        name,
        control: useForm.control,
        rules: {
            required: isRequired,
            validate: {
                whitelist: v => {
                    if (v && v.length > 0 && !whitelisted(v[0])) {
                        return "File type not permitted"
                    }
                },
                filesize: v => {
                    if (v && v.length > 0 && v[0].size > 20000000) {
                        return "Files must be 20mb or smaller"
                    }
                }
            }
        },
    });

    return (
        <FormControl isInvalid={invalid} {...groupProps}>
            <FormLabel>{label}</FormLabel>
            <InputGroup>
                {(!value || value.length < 1) &&
                    <InputLeftAddon
                        fontSize="sm"
                        color="gray.500"
                        children={<ChakraAwesome icon={['fal', 'cloud-arrow-up']} />}
                    />
                }
                {(value && value.length > 0) &&
                    <InputLeftAddon
                        cursor="pointer"
                        bg="white"
                        _hover={{ bg: "brand.Red", color: 'white', borderColor: "brand.Red" }}
                        borderColor={invalid ? 'brand.Red' : 'gray.200'}
                        onClick={() => { onChange('') }}
                        fontSize="sm"
                        color="red.500">
                        <ChakraAwesome icon={['fa', 'circle-xmark']} />
                    </InputLeftAddon>
                }
                <Input
                    onChange={(e) => { onChange(e.target.files); }}
                    type='file'
                    name={name}
                    ref={inputRef}
                    inputRef={ref}
                    style={{ display: 'none' }}
                    {...inputProps} />
                <Box
                    flexGrow="3"
                    _hover={{ bg: "gray.50", color: "green.700", borderColor: "green.300" }}
                    cursor="pointer"
                    fontSize="sm"
                    borderWidth="1px"
                    borderTopRightRadius="md"
                    borderBottomRightRadius="md"
                    borderColor={invalid ? 'brand.Red' : 'gray.200'}
                    px="3"
                    py="2"
                    color="gray.400"
                    onClick={() => inputRef.current.click()}>
                    {value && value.length > 0 && value[0].name}
                    {!value && (placeholder || "Select file from computer ...")}
                </Box>

            </InputGroup>
            <FormErrorMessage mb="3">
                {error?.message}
            </FormErrorMessage>
        </FormControl>
    );
}

export default File;
