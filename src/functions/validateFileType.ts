const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp'
]

const validateFileType = (fileType: string) => whitelist.includes(fileType.toLowerCase());

export default validateFileType;
