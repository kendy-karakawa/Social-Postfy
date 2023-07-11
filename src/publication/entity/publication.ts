export class Publication{
    constructor(
        public _image: string, 
        public _title: string, 
        public _text: string, 
        public _dateToPublish: string, 
        public _published: boolean, 
        public _socialMedia: string
    ){}
}