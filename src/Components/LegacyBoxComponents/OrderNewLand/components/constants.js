import lg2 from '../../../../Icons/legacy__room__2.png';
import lg3 from '../../../../Icons/legacy__room__3.png';
import lg1 from '../../../../Icons/legacy__room__1.png';
import lg4 from '../../../../Icons/legacy__room__4.png';
import custom from '../../../../Icons/custom__legacy__room.png';

export const STRING_SLIDER_TYPES = [
    { id: 1, name: "STANDARD" },
    { id: 2, name: "PREMIUM" },
    { id: 3, name: "ANOTHER" },
]

export const PRIVELEGES_ALL_LEVELS = [
    {
        sizeAndLocation: { text: 'size and location of the plot', value: 'standard Conditions', className: 'default' },
        familyAccess: { text: 'family access', value: 'up to 4 persons', className: 'default' },
        typeOfTombstone: { text: 'type of tombstone', value: 'Standard tombstones', className: 'default' },
        typeOfLegacyRoom: { text: 'type of legacy room', value: 'Standard rooms', className: 'default' },
        legacyDataStorage: { text: 'legacy data storage	', value: 'limited with 50GB', className: 'default' },
        lookPhotosAliveAndMoving: { text: 'AI to make photos look alive and moving', value: '5 photos', className: 'default' },
        bookReading: { text: 'book reading', value: '1 voice', className: 'default' },
        avatarOrHologram: { text: 'avatar & hologram', value: 'avatar', className: 'default' },
        guestBook: { text: 'Guestbook', value: true, className: 'active' },
        buyAdditionalStorageData: { text: 'But Additional Storage DATA', value: true, className: 'active' },
        familyTree: { text: 'Family tree', value: true, className: 'active' },
        achivementsBoard: { text: 'Achievement board', value: false, className: 'inactive' },
        leaveAFlowerACandle: { text: 'leave a flower, a candle', value: false, className: 'inactive' },
        dnaTest: { text: 'DNA test', value: false, className: 'inactive' },
        anythingTo3d: { text: 'Anything to 3D', value: false, className: 'inactive' },
    },
    {
        sizeAndLocation: { text: 'size and location of the plot', value: 'premium Conditions', className: 'default' },
        familyAccess: { text: 'family access', value: 'up to 4 persons', className: 'default' },
        typeOfTombstone: { text: 'type of tombstone', value: 'Standard tombstones', className: 'default' },
        typeOfLegacyRoom: { text: 'type of legacy room', value: 'Standard rooms', className: 'default' },
        legacyDataStorage: { text: 'legacy data storage	', value: 'limited with 50GB', className: 'default' },
        lookPhotosAliveAndMoving: { text: 'AI to make photos look alive and moving', value: '5 photos', className: 'default' },
        bookReading: { text: 'book reading', value: '1 voice', className: 'default' },
        avatarOrHologram: { text: 'avatar & hologram', value: 'avatar', className: 'default' },
        guestBook: { text: 'Guestbook', value: true, className: 'active' },
        buyAdditionalStorageData: { text: 'But Additional Storage DATA', value: true, className: 'active' },
        familyTree: { text: 'Family tree', value: true, className: 'active' },
        achivementsBoard: { text: 'Achievement board', value: false, className: 'inactive' },
        leaveAFlowerACandle: { text: 'leave a flower, a candle', value: false, className: 'inactive' },
        dnaTest: { text: 'DNA test', value: false, className: 'inactive' },
        anythingTo3d: { text: 'Anything to 3D', value: false, className: 'inactive' },
    },
    {
        sizeAndLocation: { text: 'size and location of the plot', value: 'another Conditions', className: 'default' },
        familyAccess: { text: 'family access', value: 'up to 4 persons', className: 'default' },
        typeOfTombstone: { text: 'type of tombstone', value: 'Standard tombstones', className: 'default' },
        typeOfLegacyRoom: { text: 'type of legacy room', value: 'Standard rooms', className: 'default' },
        legacyDataStorage: { text: 'legacy data storage	', value: 'limited with 50GB', className: 'default' },
        lookPhotosAliveAndMoving: { text: 'AI to make photos look alive and moving', value: '5 photos', className: 'default' },
        bookReading: { text: 'book reading', value: '1 voice', className: 'default' },
        avatarOrHologram: { text: 'avatar & hologram', value: 'avatar', className: 'default' },
        guestBook: { text: 'Guestbook', value: true, className: 'active' },
        buyAdditionalStorageData: { text: 'But Additional Storage DATA', value: true, className: 'active' },
        familyTree: { text: 'Family tree', value: true, className: 'active' },
        achivementsBoard: { text: 'Achievement board', value: false, className: 'inactive' },
        leaveAFlowerACandle: { text: 'leave a flower, a candle', value: false, className: 'inactive' },
        dnaTest: { text: 'DNA test', value: false, className: 'inactive' },
        anythingTo3d: { text: 'Anything to 3D', value: false, className: 'inactive' },
    },
]

export const PRIVELEGES_PRICES = [
    { name: 'standard', price: '150$', description: 'recurring fee (Q/A/20y)' },
    { name: 'premium', price: '250$', description: 'recurring fee (Q/A/20y)' },
    { name: 'another', price: '350$', description: 'recurring fee (Q/A/20y)' }
] 

export const SCENES = [
    { name: 'custom', img: custom },
    { name: 'default1', img: lg1 },
    { name: 'default2', img: lg2 },
    { name: 'default3', img: lg3  },
    { name: 'default4', img: lg4  },
]  