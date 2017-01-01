var prop = {
    personal:{
      loglevel: 2,//1,2,3,4
      reqData: '',
      theme: 'dark' //dark, light
    },
    server: {
        host: 'localhost', //localhost:6969, 10.66.118.36:16702(agd),  10.66.124.22:20651(losvm) 10.66.118.51:7021(chlk) 10.66.118.27:35502(vasuda) 10.66.118.160:7021(malavika)
        port: "6969", //6969 16902
        field_def: null,
        encode: {
          header_encode: 'ascii', //  hex, ascii,chexehex,chexeascii
          mti_encode: 'ascii', //  hex, ascii
          bitmap_encode: 'hex', //  hex, ascii
          field_encode: 'ascii' //  ascii
        },
        header: {
            include_header: true,
            include_header_for_msglen_cal: false,
            header_len: 4,
        }
    },
    client: {
        field_def: null,
        encode: {
            header_encode: 'ascii', //  hex, ascii,chexehex,chexeascii
            mti_encode: 'ascii', //  hex, ascii
            bitmap_encode: 'hex', //  hex, ascii
            field_encode: 'ascii' //  ascii
        },
        header: {
            include_header: true,
            include_header_for_msglen_cal: false,
            header_len: 4,
        }
    }
}

module.exports = prop;