import { create } from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

//const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
//const setLocalStorage = (key, value) =>
//window.localStorage.setItem(key, JSON.stringify(value));

const store = (set) => ({
  userOnHome: true,
  productsCatalog: false,
  textureState: "dirt",
  placedCubes: [
    {
      key: "IOtKdQVEGu3W9MPGP9TSr",
      pos: [-1, 1, -20],
    },
    {
      key: "LAU1H1bHAWmkXonsOiD65",
      pos: [-2, 1, -20],
    },
    {
      key: "4CC2bauuzn1bgqIqAc62K",
      pos: [-3, 1, -20],
    },
    {
      key: "PN8KtIblRcl9fSbikUbCs",
      pos: [-4, 1, -20],
    },
    {
      key: "FDpgH7bcpiT9z3PWbdXFc",
      pos: [-5, 1, -20],
    },
    {
      key: "fF5hrYVTDktPROZq9Qjwl",
      pos: [-6, 1, -20],
    },
    {
      key: "xTv9sIpwCSos95wiv8fHe",
      pos: [-7, 1, -20],
    },
    {
      key: "ln3xh3585bQANTgAH-vr-",
      pos: [-8, 1, -20],
    },
    {
      key: "0Tx5OvY4g0fU9BXjp71T3",
      pos: [-9, 1, -20],
    },
    {
      key: "8-CcxNUBkdwkIBvm3lD5J",
      pos: [-10, 1, -20],
    },
    {
      key: "XZkwjzkdEvtM15Qa-owbU",
      pos: [2, 1, -20],
    },
    {
      key: "biNNM6gSKhtpnSCZkq3Q8",
      pos: [3, 1, -20],
    },
    {
      key: "zwrDV5CJcuSg3InKCuJcF",
      pos: [4, 1, -20],
    },
    {
      key: "mGQj_pd1ytOOdYBkQpylh",
      pos: [5, 1, -20],
    },
    {
      key: "QFxbM14l15WVj02Sb5wKd",
      pos: [6, 1, -20],
    },
    {
      key: "PmpMwgpMHLQSE1b_HIYPC",
      pos: [7, 1, -20],
    },
    {
      key: "uTrzShXk7O7U1lGd7l6Jy",
      pos: [8, 1, -20],
    },
    {
      key: "3aPpX4IPm0UM_xfOx2cKZ",
      pos: [9, 1, -20],
    },
    {
      key: "aPnlKmGLMnsLISath-Nf-",
      pos: [10, 1, -20],
    },
    {
      key: "PTBqlqCFAwhQ8vlMl_aw7",
      pos: [2, 2, -20],
    },
    {
      key: "Mpas7qEM0Hi3Yr33NuyIS",
      pos: [2, 3, -20],
    },
    {
      key: "lABn2uFePLeamU7Ugagtf",
      pos: [2, 4, -20],
    },
    {
      key: "9pFZxWerfKa79ay2Jk3MI",
      pos: [-1, 2, -20],
    },
    {
      key: "QmQBC9I_Wgn8s3mWsvRfy",
      pos: [-1, 3, -20],
    },
    {
      key: "5XOYifrTFW8p9JBOQ-2HG",
      pos: [-1, 4, -20],
    },
    {
      key: "IdqcDsK42YaUo5ErDkUxm",
      pos: [-1, 5, -20],
    },
    {
      key: "BSEOHKRc38cFxdJ9b6AU7",
      pos: [2, 5, -20],
    },
    {
      key: "KR3_bNTWFv_g5yjeQftKC",
      pos: [1, 5, -20],
    },
    {
      key: "tNraey0_bZNTMJpesQGMK",
      pos: [0, 5, -20],
    },
    {
      key: "H4OGL3Gq0Uf-5eWuii_22",
      pos: [-9, 2, -20],
    },
    {
      key: "zfvlW92-iP5oeZdKVwkuT",
      pos: [-10, 2, -20],
    },
    {
      key: "GVkxBZf9RnowaLtsh7sq7",
      pos: [-10, 3, -20],
    },
    {
      key: "_tkE6AW3NDSjcbc990dUg",
      pos: [-10, 4, -20],
    },
    {
      key: "ITnFaFK0huH5LcEZuwKaz",
      pos: [-2, 5, -20],
    },
    {
      key: "8v75FZgOy2EiK16A7yvzQ",
      pos: [-3, 5, -20],
    },
    {
      key: "lozBz5VKbopGxUj78uJGu",
      pos: [-4, 5, -20],
    },
    {
      key: "RaK45wrfDPD-JP59Kxh8T",
      pos: [-5, 5, -20],
    },
    {
      key: "PYqZDFchg8w0WogyYGfi_",
      pos: [-6, 5, -20],
    },
    {
      key: "ZZgecdEpiij8CXy-iQV4c",
      pos: [-7, 5, -20],
    },
    {
      key: "KT1L7BiEYl4flpTKLme-U",
      pos: [-8, 5, -20],
    },
    {
      key: "RpO1DRq0Q1PhRaSOxmbEn",
      pos: [-9, 5, -20],
    },
    {
      key: "zZqLSoCgGRZfMAaE7SZYX",
      pos: [-10, 5, -20],
    },
    {
      key: "2OXCOf0yynTgZhQJ82jtT",
      pos: [-9, 4, -20],
    },
    {
      key: "BwyBMJ0wZBixWTS5D-19a",
      pos: [-9, 3, -20],
    },
    {
      key: "nKX4r3px6T2OlwTz7UnbX",
      pos: [-8, 4, -20],
    },
    {
      key: "BBKKhHOELGQayPKDkYB2u",
      pos: [-8, 3, -20],
    },
    {
      key: "CwV2Wy0R_kRH1zmb6pUfv",
      pos: [-8, 2, -20],
    },
    {
      key: "ftcVaZDRDx3sKZ54TZKK2",
      pos: [-7, 4, -20],
    },
    {
      key: "kMdOYwJs96GR4AZTdWUj9",
      pos: [-7, 3, -20],
    },
    {
      key: "eYHufCDlzCEantqr4HMVy",
      pos: [-7, 2, -20],
    },
    {
      key: "1uMbQH1dp4_KNkmf2N7uG",
      pos: [-6, 4, -20],
    },
    {
      key: "Z1JbuenGVlOlKXGsBBCrQ",
      pos: [-6, 3, -20],
    },
    {
      key: "-WAE1zioN05C6y6LKG2j6",
      pos: [-6, 2, -20],
    },
    {
      key: "Zla7sN3Bcb1DAMcuN_kYu",
      pos: [-5, 4, -20],
    },
    {
      key: "mchlNs1K3Q3KgDgjgaFGh",
      pos: [-5, 3, -20],
    },
    {
      key: "z0pk1YRybU8U7ihpfit5i",
      pos: [-5, 2, -20],
    },
    {
      key: "JaRdFedFJXiCr4tpUZTOS",
      pos: [-2, 4, -20],
    },
    {
      key: "WDMgHnQNmUCYV3zsD3SL_",
      pos: [-2, 3, -20],
    },
    {
      key: "LkCiypnavl1L1JXARX5Nl",
      pos: [-2, 2, -20],
    },
    {
      key: "ABqScdF4y3ZYMn3kXBasL",
      pos: [-4, 4, -20],
    },
    {
      key: "HF6wf8JcTExwdKiZIsYTA",
      pos: [-4, 3, -20],
    },
    {
      key: "3eQsRKK4nzNa6oEG7xuTx",
      pos: [-4, 2, -20],
    },
    {
      key: "oDym3Hq98arrIKPRtxMud",
      pos: [-3, 4, -20],
    },
    {
      key: "j6udkS_95b6_iuxgTu37G",
      pos: [-3, 3, -20],
    },
    {
      key: "7NxqGyU3o5sN5EnE6Ey8C",
      pos: [-3, 2, -20],
    },
    {
      key: "lO2Ckuyo3-3dbRHfEooRW",
      pos: [3, 5, -20],
    },
    {
      key: "PWMeltzmCmMQo6YFLtKDn",
      pos: [3, 4, -20],
    },
    {
      key: "-Dq0eNyFy3MNRePdOkdWo",
      pos: [3, 3, -20],
    },
    {
      key: "QLduzUoO9XY5QC4vfR79C",
      pos: [3, 2, -20],
    },
    {
      key: "ThpSAGvWDrRLsIurIwjat",
      pos: [4, 5, -20],
    },
    {
      key: "k2lNRxWSiLmAZD4TVhWe4",
      pos: [4, 4, -20],
    },
    {
      key: "3KXq37u_6TeClCTt69YXI",
      pos: [4, 3, -20],
    },
    {
      key: "vr3zI1AEf_gEbeYHqZnFT",
      pos: [4, 2, -20],
    },
    {
      key: "a_fYgpOaai9efT99ed1iW",
      pos: [5, 5, -20],
    },
    {
      key: "SslTXiOtCrdQhMHvgH2PY",
      pos: [5, 4, -20],
    },
    {
      key: "EWPvEZ-pgi7qTI8RHZ5L2",
      pos: [5, 3, -20],
    },
    {
      key: "8ReqkGY8RTg4InOs8Wbwi",
      pos: [5, 2, -20],
    },
    {
      key: "l7NAqNBxjlCKmSMif6RUH",
      pos: [6, 5, -20],
    },
    {
      key: "CScDtE0u4bABC6erRrfKa",
      pos: [6, 4, -20],
    },
    {
      key: "iK8-7Zl1Jueok-hk4tG1O",
      pos: [6, 3, -20],
    },
    {
      key: "ZQdwgxVFnRGb-4M4EksFq",
      pos: [6, 2, -20],
    },
    {
      key: "mfMEA0rzr5mnj5XLTAqDl",
      pos: [7, 5, -20],
    },
    {
      key: "_1DmH9gJi93gNXJUOE9Mj",
      pos: [7, 4, -20],
    },
    {
      key: "R6sfIjp5fC4trwknW0dI_",
      pos: [7, 3, -20],
    },
    {
      key: "IxoZPqjMPWNcLhBd9NFlP",
      pos: [7, 2, -20],
    },
    {
      key: "5p2BavTx0HPBaH0bMAUBI",
      pos: [8, 5, -20],
    },
    {
      key: "BcS-x06K5EabRqsvz6YKj",
      pos: [8, 4, -20],
    },
    {
      key: "k2RXTlsvFG-D0fWZiitvc",
      pos: [8, 3, -20],
    },
    {
      key: "FiUsmvSwhDOYI0IgCczfU",
      pos: [8, 2, -20],
    },
    {
      key: "J3d5Ax_wuu0SWrtc7xZyQ",
      pos: [9, 5, -20],
    },
    {
      key: "SrLCSddmqXeV-z_TFHITZ",
      pos: [9, 4, -20],
    },
    {
      key: "NoVDD-qYuhpkKUTYEwUhY",
      pos: [9, 3, -20],
    },
    {
      key: "RX_UooW7GQQqIjnZhFDP8",
      pos: [9, 2, -20],
    },
    {
      key: "As0NIpcQwN02Uz08JZkIv",
      pos: [10, 5, -20],
    },
    {
      key: "8C8GwewmHiBA4bk74DCaP",
      pos: [10, 4, -20],
    },
    {
      key: "98Ba9XbvhflgVcF6A2APn",
      pos: [10, 3, -20],
    },
    {
      key: "FJt9w3hfjnMLhqP4qss49",
      pos: [10, 2, -20],
    },
    {
      key: "36OEbv-sjKrF7KbV8fe-K",
      pos: [10, 5, -21],
    },
    {
      key: "LvM-PFwEqQuJi7bErFrIp",
      pos: [10, 4, -21],
    },
    {
      key: "3NaiL_cQ5a1BZh8pd2zxv",
      pos: [10, 3, -21],
    },
    {
      key: "SaaViNYuvHkZ9V8_DO0DM",
      pos: [10, 2, -21],
    },
    {
      key: "F7-BgkIoBEI8hhsrVJv6V",
      pos: [10, 1, -21],
    },
    {
      key: "FruGqajZam2J8rnsUqj7j",
      pos: [10, 5, -22],
    },
    {
      key: "ccl0lOaJbGRG7basHXdA6",
      pos: [10, 4, -22],
    },
    {
      key: "lcCvOKcfr0KFtup_PX0BF",
      pos: [10, 3, -22],
    },
    {
      key: "E4uqmXdn0vSJOST7C4SbF",
      pos: [10, 2, -22],
    },
    {
      key: "JYgoY_VfQ6EKFSs6GGKyI",
      pos: [10, 1, -22],
    },
    {
      key: "TgbhCIgp7bHmCleqhWN-k",
      pos: [10, 5, -23],
    },
    {
      key: "wGjbHPC8S04UdpsOrT8e8",
      pos: [10, 4, -23],
    },
    {
      key: "VKvmVOPYtWjEP9ybdI3vN",
      pos: [10, 3, -23],
    },
    {
      key: "6oFv9PX1OelTYDHsKjctv",
      pos: [10, 2, -23],
    },
    {
      key: "wi7nrWQogfVenjg8m07Kq",
      pos: [10, 1, -23],
    },
    {
      key: "o3Y2_o0UM_wsIm0PB72q5",
      pos: [10, 5, -24],
    },
    {
      key: "fLtkGO9Thzxyh5d89uhjE",
      pos: [10, 4, -24],
    },
    {
      key: "hiUNEdtu6C6CaTaTdDOX4",
      pos: [10, 3, -24],
    },
    {
      key: "DI3USAR-xoEgX9qIjxWfF",
      pos: [10, 2, -24],
    },
    {
      key: "4wAdYqIEBqrNrE1fK1Ec_",
      pos: [10, 1, -24],
    },
    {
      key: "umylwsvhLIN2Tqkx7gVGJ",
      pos: [10, 5, -25],
    },
    {
      key: "r8SPQ7f-TjhKWsIl2_xOL",
      pos: [10, 4, -25],
    },
    {
      key: "I1FhfW4EvRASQ-bWNqf9_",
      pos: [10, 3, -25],
    },
    {
      key: "3S30XiJPzzscbyoYVQVi6",
      pos: [10, 2, -25],
    },
    {
      key: "iKVDhk5TiVCTHlnJJNcLn",
      pos: [10, 1, -25],
    },
    {
      key: "kuPaiinnSADItWrBPCuQw",
      pos: [10, 5, -26],
    },
    {
      key: "tml3MECJF2melxYBNBzVj",
      pos: [10, 4, -26],
    },
    {
      key: "x6dQa1QQqWrBYn1jpxnmY",
      pos: [10, 3, -26],
    },
    {
      key: "dcxtDSKqF8JWc-jEdTaV9",
      pos: [10, 2, -26],
    },
    {
      key: "rrA3R98qWK6WB6YklIOGA",
      pos: [10, 1, -26],
    },
    {
      key: "UmMxSHVHy5hvs7guJxz_C",
      pos: [10, 5, -27],
    },
    {
      key: "M8XmiMd3RlCzqUkVYjIfI",
      pos: [10, 4, -27],
    },
    {
      key: "tI-zS-hsT1-wwJaZV5s2X",
      pos: [10, 3, -27],
    },
    {
      key: "5mwHhvK1WaERDGwvnWXl_",
      pos: [10, 2, -27],
    },
    {
      key: "2zESIjryrtyeL92CLxlXB",
      pos: [10, 1, -27],
    },
    {
      key: "1xKYWIB2IB_p8PaszJftz",
      pos: [10, 5, -28],
    },
    {
      key: "8looV2IeqFaPCd76NHl8R",
      pos: [10, 4, -28],
    },
    {
      key: "YcqyuY29P1ksfhV2jOuW3",
      pos: [10, 3, -28],
    },
    {
      key: "V2xa7x-aLpXuEKEz5cpXi",
      pos: [10, 2, -28],
    },
    {
      key: "Mp1FlCZBaa3UBBGCOqtXg",
      pos: [10, 1, -28],
    },
    {
      key: "4HFI4fivbKUoosG-h_hEl",
      pos: [10, 5, -29],
    },
    {
      key: "yjCi52AAxmjiwQpKbmADx",
      pos: [10, 4, -29],
    },
    {
      key: "W6mTeIq0rQaH2WAlt6tLR",
      pos: [10, 3, -29],
    },
    {
      key: "8f9Du20VJ7qRaKHH_48an",
      pos: [10, 2, -29],
    },
    {
      key: "w9uSysanwk20UwQgtVEc4",
      pos: [10, 1, -29],
    },
    {
      key: "Xmlas9E5iww-ClkYXEN9Y",
      pos: [10, 5, -30],
    },
    {
      key: "KZfM7gOpnv3fIabtB_rQX",
      pos: [10, 4, -30],
    },
    {
      key: "MRXiv9mZmRYkWD93ihe72",
      pos: [10, 3, -30],
    },
    {
      key: "MtMqYuFgGIz6Dwu-_t-Z5",
      pos: [10, 2, -30],
    },
    {
      key: "Uuq-Hozb1EgApVD0xrVtB",
      pos: [10, 1, -30],
    },
    {
      key: "1508eqnZJUdaKO9wRicq5",
      pos: [10, 5, -31],
    },
    {
      key: "Ct9XFO93mQj3HkBdS1BkW",
      pos: [10, 4, -31],
    },
    {
      key: "Sffraiio_sTHrFnrM0Hq4",
      pos: [10, 3, -31],
    },
    {
      key: "ufiVS3HlEj16k8TnN-kHE",
      pos: [10, 2, -31],
    },
    {
      key: "f73jj9tucIUAKy6rrbWFg",
      pos: [10, 1, -31],
    },
    {
      key: "gVSfRyGDT9FyCWVjbrzMA",
      pos: [10, 5, -32],
    },
    {
      key: "EAnRlB_LozrBTu7zAVbV_",
      pos: [10, 4, -32],
    },
    {
      key: "KmFfaXC-BoWNP8cmLb1V_",
      pos: [10, 3, -32],
    },
    {
      key: "dZ61DJ7s8STlKW4pdVI5j",
      pos: [10, 2, -32],
    },
    {
      key: "KsLCcb-AECmTxlJnRZdga",
      pos: [10, 1, -32],
    },
    {
      key: "Raz_1uHj7j9DFEQrsRihx",
      pos: [10, 5, -33],
    },
    {
      key: "vRCfukxpQ9MiaP6L8kfEq",
      pos: [10, 4, -33],
    },
    {
      key: "_JrMxveQVZtoUBiAiAnxj",
      pos: [10, 3, -33],
    },
    {
      key: "A-Wlz2zz445sD18uLYoiC",
      pos: [10, 2, -33],
    },
    {
      key: "bRP7afnV3Gmy0GHLk06LX",
      pos: [10, 1, -33],
    },
    {
      key: "y2nzpDFULoM493C488z9l",
      pos: [10, 2, -34],
    },
    {
      key: "Qswe095ixGyrvML2vbgEr",
      pos: [10, 3, -34],
    },
    {
      key: "ooNnHYXsQXmDBSCotDFua",
      pos: [10, 5, -24],
    },
    {
      key: "tyrbYSbZ1YfIC4B6ESdRs",
      pos: [10, 4, -34],
    },
    {
      key: "xsuJbUZ8bM-o6tLZecWSM",
      pos: [10, 5, -34],
    },
    {
      key: "MwPqkUWViwQXfWH9VLguX",
      pos: [10, 1, -34],
    },
    {
      key: "Ymn8dE0aNVJpeJmmlsY4_",
      pos: [10, 1, -35],
    },
    {
      key: "zJVVBWFWD4PQnpSNhyRA9",
      pos: [10, 2, -35],
    },
    {
      key: "4J6Qd3yuZ4w753qcCb4hc",
      pos: [10, 3, -35],
    },
    {
      key: "8g2hX22n9QZGJbQw0AwYh",
      pos: [10, 4, -35],
    },
    {
      key: "HXnILXRNMtOv3rTQmmDiD",
      pos: [10, 5, -35],
    },
    {
      key: "4haQ5PjdwEQeFHv0ZGpwh",
      pos: [10, 5, -36],
    },
    {
      key: "RzhX2JAOpczJKlPd7cFGW",
      pos: [10, 4, -36],
    },
    {
      key: "5UV9WoXT3CB6L07j1Vb_F",
      pos: [10, 3, -36],
    },
    {
      key: "_anMJBwT55OJ7VT9vLcv4",
      pos: [10, 2, -36],
    },
    {
      key: "fBphtjC8X7YKUGm-UxTyB",
      pos: [10, 1, -36],
    },
    {
      key: "kBZ3LYCyZGrDk1Dx-vAaI",
      pos: [10, 5, -37],
    },
    {
      key: "kxcd5QmMXaLZBtaCFEpla",
      pos: [10, 4, -37],
    },
    {
      key: "hCTvY5SFqLz_xEsuU3QGJ",
      pos: [10, 3, -37],
    },
    {
      key: "7j4NjD-o3n0z59z5MkxvN",
      pos: [10, 2, -37],
    },
    {
      key: "DX3TVdZwdE7mE8BU7Yf9c",
      pos: [10, 1, -37],
    },
    {
      key: "To8gFupev88GlJ-RBAITL",
      pos: [10, 5, -38],
    },
    {
      key: "oW1Ucd8hFtIVDr8SGYYOE",
      pos: [10, 4, -38],
    },
    {
      key: "BuSJABB4L7piLtEl6VEeL",
      pos: [10, 3, -38],
    },
    {
      key: "bF0N_T_IqBrcxzdj50oZT",
      pos: [10, 2, -38],
    },
    {
      key: "aM59t4BTgenagvYDADcva",
      pos: [10, 1, -38],
    },
    {
      key: "hiI4GXYHseiyyGrDHBw4L",
      pos: [9, 5, -38],
    },
    {
      key: "42fUdqNbiDSG95RmJ2--P",
      pos: [9, 4, -38],
    },
    {
      key: "TSJzqfWEZPKSyFqWf1Unw",
      pos: [9, 3, -38],
    },
    {
      key: "zogx3aUp4kH1N2NdxNOa7",
      pos: [9, 2, -38],
    },
    {
      key: "_CZUnqywoRlwjuBtLS9C7",
      pos: [9, 1, -38],
    },
    {
      key: "GWiMjXApKsoEVLXrnp_jc",
      pos: [8, 5, -38],
    },
    {
      key: "-bsfcZvd6T9rTCrelCtCD",
      pos: [8, 4, -38],
    },
    {
      key: "0whMHh36fSHwnUl_1Jwvt",
      pos: [8, 3, -38],
    },
    {
      key: "I0lvuaxgCTQL4MtWgtUV8",
      pos: [8, 2, -38],
    },
    {
      key: "sGkznN1CW8jucv6eSbb5T",
      pos: [8, 1, -38],
    },
    {
      key: "bqfxaqFJ2Ki3AVmQP-ih9",
      pos: [7, 5, -38],
    },
    {
      key: "vbbW7fJ7rm3-0Hkm6DvYt",
      pos: [7, 4, -38],
    },
    {
      key: "G4rz7ho2w5DIFLS39Xk5M",
      pos: [7, 3, -38],
    },
    {
      key: "AK0-ApBvEGTNNp7j6c4-d",
      pos: [7, 2, -38],
    },
    {
      key: "mwPvu4ZyZgkFHONp7s757",
      pos: [7, 1, -38],
    },
    {
      key: "XzqCIqbdZFlKsWoB0b6AG",
      pos: [6, 5, -38],
    },
    {
      key: "Mr2mSi4okauY4V7MDIr5P",
      pos: [6, 4, -38],
    },
    {
      key: "fjiy--3BefI2mtRxVV31R",
      pos: [6, 3, -38],
    },
    {
      key: "1vA997yubkti57TWE35mM",
      pos: [6, 2, -38],
    },
    {
      key: "BtTE0m-3zDSm43WONsmWD",
      pos: [5, 2, -38],
    },
    {
      key: "onGDQH9mb7u8x4anSQMoY",
      pos: [6, 1, -38],
    },
    {
      key: "VJ9WwC-UPZoWqmF_2AqBk",
      pos: [5, 1, -38],
    },
    {
      key: "TbcuQWDTqBAGqQ0nXv0SU",
      pos: [5, 3, -38],
    },
    {
      key: "KaA6TfF8mHUWS_EWRhNa3",
      pos: [5, 4, -38],
    },
    {
      key: "RUyzJpE-MGagH2yrV2o65",
      pos: [5, 5, -38],
    },
    {
      key: "zM64ywA3gcjpPklMgG-IC",
      pos: [4, 5, -38],
    },
    {
      key: "b2p7eaWDStX43UxRaHUss",
      pos: [4, 4, -38],
    },
    {
      key: "-6Sk0XOPWoFtm_X6ni-O_",
      pos: [4, 3, -38],
    },
    {
      key: "sm-JTbtfOLHReEVpuoF3E",
      pos: [4, 2, -38],
    },
    {
      key: "fzj0Q3YOX9skuZZTU0FT-",
      pos: [4, 1, -38],
    },
    {
      key: "wW-9DGD7Kk-X8bYm5Br5A",
      pos: [3, 5, -38],
    },
    {
      key: "Un7_vhul3q1ci_hKvwHNX",
      pos: [3, 4, -38],
    },
    {
      key: "hZY639qTUQnpYnTJzioIK",
      pos: [3, 3, -38],
    },
    {
      key: "rmJAUgqpJ7npjTNohoWwg",
      pos: [3, 2, -38],
    },
    {
      key: "7Mzx1PCipNNmAwnLBCeLQ",
      pos: [3, 1, -38],
    },
    {
      key: "qZRcSvov4qDYBE1uxEivy",
      pos: [2, 5, -38],
    },
    {
      key: "A2sH68oLZZJyYKWLsQ8gY",
      pos: [2, 4, -38],
    },
    {
      key: "_3ouAj5hbWJufToIFmTVO",
      pos: [2, 3, -38],
    },
    {
      key: "JAPSVwV-t2dEMDXRGOnLO",
      pos: [2, 2, -38],
    },
    {
      key: "gbPPTILQgyYtp-fxx6T9J",
      pos: [2, 1, -38],
    },
    {
      key: "9J1ZO3KgVGGcTI0TgO7-E",
      pos: [1, 5, -38],
    },
    {
      key: "caODrw5hfo-azb4tKPhmF",
      pos: [1, 4, -38],
    },
    {
      key: "E8rxro23vedRNsijj3tkB",
      pos: [1, 3, -38],
    },
    {
      key: "jimdGsmlhBwwtG-HlsUDq",
      pos: [1, 2, -38],
    },
    {
      key: "2V8N2sqYfqaPAgYzCsy0m",
      pos: [1, 1, -38],
    },
    {
      key: "4yGlKvbo9cGF9klV3I-LO",
      pos: [0, 5, -38],
    },
    {
      key: "j3_NjAmzlmMwZqVyYViUo",
      pos: [0, 4, -38],
    },
    {
      key: "xIgp2DyrqwEOKHfD6kgx7",
      pos: [0, 3, -38],
    },
    {
      key: "K17ltdlT9puWAJv22fr3P",
      pos: [0, 2, -38],
    },
    {
      key: "qFHalcVbf8eJrt_MQBwiD",
      pos: [0, 1, -38],
    },
    {
      key: "R1dgU2tpnr1WeIn2GMq-P",
      pos: [-1, 5, -38],
    },
    {
      key: "SoEJRD7cJLffKvDAHrM_Y",
      pos: [-1, 4, -38],
    },
    {
      key: "nd-dTXeZhSq4PQQD751Mt",
      pos: [-1, 3, -38],
    },
    {
      key: "MsQJrKRGwXH4dsJ-4NrBU",
      pos: [-1, 2, -38],
    },
    {
      key: "LSR9vPyGjVEHEWrBVaFN4",
      pos: [-1, 1, -38],
    },
    {
      key: "XruLhpr5GnNGSneUONTDw",
      pos: [-2, 5, -38],
    },
    {
      key: "_UHg3UumqzLXlM-o9Z1GK",
      pos: [-2, 4, -38],
    },
    {
      key: "hm1AeI8i9zC69pmurpW25",
      pos: [-2, 3, -38],
    },
    {
      key: "g95ds2PLqbRN9MOc5CyZg",
      pos: [-2, 2, -38],
    },
    {
      key: "hGK4_2bfPcNs_W9XeC8D8",
      pos: [-2, 1, -38],
    },
    {
      key: "nigpy1HWJM141gMabVxe_",
      pos: [-3, 5, -38],
    },
    {
      key: "Nb5QwTKBLOZfPJuh88pgM",
      pos: [-3, 4, -38],
    },
    {
      key: "MvRetAL01BlFI9_mF3_IQ",
      pos: [-3, 3, -38],
    },
    {
      key: "3QqEPbMoXZHuFDTMAg4HZ",
      pos: [-3, 2, -38],
    },
    {
      key: "KuUuZiWk4o9VHtM3AsslP",
      pos: [-3, 1, -38],
    },
    {
      key: "QRtIz3yKm4i-JSmIJSCtr",
      pos: [-4, 5, -38],
    },
    {
      key: "4UQSPxpC2jIzKW_fLPfSf",
      pos: [-4, 4, -38],
    },
    {
      key: "nkmyXILwM6-y8vDLx-xoQ",
      pos: [-4, 3, -38],
    },
    {
      key: "ZeqORUh77uCMVb6hMQ-s_",
      pos: [-4, 2, -38],
    },
    {
      key: "OQv-RJ8mZoN1oYLV29lN1",
      pos: [-4, 1, -38],
    },
    {
      key: "w4Zzp_r9LKp_3AvKWLw0r",
      pos: [-5, 5, -38],
    },
    {
      key: "GHtp6MZV9G_TkQnjmrtNQ",
      pos: [-5, 4, -38],
    },
    {
      key: "rKDskrOyWmkpwWUiaSZR0",
      pos: [-5, 3, -38],
    },
    {
      key: "GENqFlAybsrSINwls7WJC",
      pos: [-5, 2, -38],
    },
    {
      key: "k2tGZezWuuY5HMNONR8Mx",
      pos: [-4, 1, -38],
    },
    {
      key: "eyvvag7BC1KkHaA7j9Mjj",
      pos: [-5, 1, -38],
    },
    {
      key: "DzoJcbzPQlBu-M4XEZcnu",
      pos: [-10, 5, -21],
    },
    {
      key: "k2UPWN96XeZpvkvcw9e1R",
      pos: [-10, 4, -21],
    },
    {
      key: "SeRqIZuwJBUeErLntvjYP",
      pos: [-10, 3, -21],
    },
    {
      key: "NOuzI9nEJmE4UdUgXoOHA",
      pos: [-10, 2, -21],
    },
    {
      key: "WwhWYhOjW7Z6LJGU8FhgH",
      pos: [-10, 1, -21],
    },
    {
      key: "GmHfU5eR9jDxSWo88ZsPt",
      pos: [-10, 5, -22],
    },
    {
      key: "_u6tN9m79_rLF5OBjFTJ_",
      pos: [-10, 4, -22],
    },
    {
      key: "1SzKAzUbzlZ4ETT-4T4KG",
      pos: [-10, 3, -22],
    },
    {
      key: "iJtllheewj-FNefy_AzOt",
      pos: [-10, 2, -22],
    },
    {
      key: "4x3IjJ-Qtlnf51vMWRl38",
      pos: [-10, 1, -22],
    },
    {
      key: "ss3gOJihXP6Xxgsf53G1a",
      pos: [-10, 5, -23],
    },
    {
      key: "_LJ6_3alq4_57b_l7qgkE",
      pos: [-10, 4, -23],
    },
    {
      key: "s5Xuk0tWSTrhaQXSefCVl",
      pos: [-10, 3, -23],
    },
    {
      key: "WwrkunoOcIG970qeYbbmp",
      pos: [-10, 2, -23],
    },
    {
      key: "a7rr0IYvNPOe-vzqmlQ6X",
      pos: [-10, 1, -23],
    },
    {
      key: "Gu2N_yRU1oGAGT_AgvrNn",
      pos: [-10, 5, -24],
    },
    {
      key: "SnIe70GMyj9NS3DifbJ41",
      pos: [-10, 4, -24],
    },
    {
      key: "fknGzc8SDlgJcBOhFc3yO",
      pos: [-10, 3, -24],
    },
    {
      key: "RrxbwwOFYvuJc6HeKsP0n",
      pos: [-10, 2, -24],
    },
    {
      key: "xQPowthbocVnT0P_O3BGn",
      pos: [-10, 1, -24],
    },
    {
      key: "3HwHnGVgxmYCuAYiv7hwp",
      pos: [-10, 5, -25],
    },
    {
      key: "G04eMiY_neWQmhTGAOZ6o",
      pos: [-10, 4, -25],
    },
    {
      key: "iM7qdrMI3r2BD7cnOCkWP",
      pos: [-10, 3, -25],
    },
    {
      key: "0HJH8EtuzUHzWb7RHvXE4",
      pos: [-10, 2, -25],
    },
    {
      key: "2K14JL6H9qjuO_SQ0tpEI",
      pos: [-10, 1, -25],
    },
    {
      key: "qWNZhu8QrE8aENv2lf5m1",
      pos: [-10, 5, -26],
    },
    {
      key: "_6fiQLHrGm3QrRghiSqc5",
      pos: [-10, 4, -26],
    },
    {
      key: "EWaa1CaUXxJz7AWjpG_5A",
      pos: [-10, 3, -26],
    },
    {
      key: "gzd08hO1sdji7kj8hsILB",
      pos: [-10, 2, -26],
    },
    {
      key: "o81iU7Qv-Za4BfPQeb8b4",
      pos: [-10, 1, -26],
    },
    {
      key: "afvGRTBMAfIaAi8F6tctj",
      pos: [-10, 5, -27],
    },
    {
      key: "LYi0e_h0ZkeN6NC1DdhLv",
      pos: [-10, 4, -27],
    },
    {
      key: "UMt0vPuZZxc92SX1ItOBF",
      pos: [-10, 3, -27],
    },
    {
      key: "9dfQutsw0HQrQlnl9viI6",
      pos: [-10, 2, -27],
    },
    {
      key: "gKsIinr8vUH19osTHsUpz",
      pos: [-10, 1, -27],
    },
    {
      key: "xPtLmQ-24etQByAZYRAO6",
      pos: [-10, 5, -28],
    },
    {
      key: "Un8jalNXE1dhJ98xwwNlB",
      pos: [-10, 4, -28],
    },
    {
      key: "c7sbyOLHg5yZ7QyGPrk4T",
      pos: [-10, 3, -28],
    },
    {
      key: "Kfpzxlx2Cka3lauEaWyRD",
      pos: [-10, 2, -28],
    },
    {
      key: "DiKNzsumWpiVVusOfZIsP",
      pos: [-10, 1, -28],
    },
    {
      key: "fe67L_bVKRrF0RTmOUaE0",
      pos: [-10, 5, -29],
    },
    {
      key: "cXTJixiCSeRIbTGdaiqV6",
      pos: [-10, 4, -29],
    },
    {
      key: "xO15Z7JrME_MmeuAoJfV_",
      pos: [-10, 3, -29],
    },
    {
      key: "rT6_0dM9geVkNcGuYrDyF",
      pos: [-10, 2, -29],
    },
    {
      key: "ZigTAYH5Cdl71_QDtBynw",
      pos: [-10, 1, -29],
    },
    {
      key: "Njir0HeCDK9ksvjd80OOc",
      pos: [-10, 5, -30],
    },
    {
      key: "a14VTeHUDh4-q2OQhaEwN",
      pos: [-10, 4, -30],
    },
    {
      key: "Oic-kAvZ_2lJidorFGzsd",
      pos: [-10, 3, -30],
    },
    {
      key: "k_n_WgOI8aJ_YBm7thtWi",
      pos: [-10, 2, -30],
    },
    {
      key: "rGzcd0kZewThAyPkMwg60",
      pos: [-10, 1, -30],
    },
    {
      key: "sklYTMOHE1ocSeHjrqcv0",
      pos: [-10, 5, -31],
    },
    {
      key: "v3CY6N4TuTcqujdT_VJDZ",
      pos: [-10, 4, -31],
    },
    {
      key: "TiXfp_tRoGEaEjlaYHDQ6",
      pos: [-10, 3, -31],
    },
    {
      key: "ra-jwSYyG_TdDAyQS6Uhd",
      pos: [-10, 2, -31],
    },
    {
      key: "vBeOi_2mr1jkkDZgUSSfe",
      pos: [-10, 1, -31],
    },
    {
      key: "RcQlCRWmaV1OsRhh2n19D",
      pos: [-10, 5, -32],
    },
    {
      key: "ISO1O65Dw6TeSYBhUngQU",
      pos: [-10, 4, -32],
    },
    {
      key: "95B0I54xVndFuj4cu7iXm",
      pos: [-10, 3, -32],
    },
    {
      key: "olSdfPUhofLN83VqqiYHS",
      pos: [-10, 2, -32],
    },
    {
      key: "1ZGMxHfufQfHTRyJXeZmQ",
      pos: [-10, 1, -32],
    },
    {
      key: "CcHtAluKFy0kbrQOwNn5n",
      pos: [-10, 5, -33],
    },
    {
      key: "oSBzKQhwbhdqmdeCD3a3R",
      pos: [-10, 4, -33],
    },
    {
      key: "02ImvQnNm9GwIWpJ74Zln",
      pos: [-10, 3, -33],
    },
    {
      key: "Ml_vRtfMuZLZI-FDW9bWm",
      pos: [-10, 2, -33],
    },
    {
      key: "ZoekHkm4glMwIqp6okAvD",
      pos: [-10, 1, -33],
    },
    {
      key: "dK97CH_rVy-4zOD3XdVHj",
      pos: [-10, 5, -34],
    },
    {
      key: "9ccg5u1LH7xa222TQRzek",
      pos: [-10, 4, -34],
    },
    {
      key: "xUXz8BFX8fhzz7fsSGIEQ",
      pos: [-10, 3, -34],
    },
    {
      key: "oy2ydoWgiL8_j_78dor15",
      pos: [-10, 2, -34],
    },
    {
      key: "Sy5at0PSu5XhtDCZa0P9D",
      pos: [-10, 1, -34],
    },
    {
      key: "L_YdVNXo5GgmhEgxogn-6",
      pos: [-10, 5, -35],
    },
    {
      key: "MJCuYZv79RHit0C2ZSVQ2",
      pos: [-10, 4, -35],
    },
    {
      key: "eA5GRUm1xvVt9JdibDigq",
      pos: [-10, 3, -35],
    },
    {
      key: "JnmzGs9NTRDKACFnZ7muV",
      pos: [-10, 2, -35],
    },
    {
      key: "a6AkKQbwiWgb9zfIuL6ux",
      pos: [-10, 1, -35],
    },
    {
      key: "ARQ6TqU4x53MKPke3xFYj",
      pos: [-10, 5, -36],
    },
    {
      key: "deejKO4RGbFbUXg2qsZUQ",
      pos: [-10, 4, -36],
    },
    {
      key: "1UyXqTsed0rsnyV8GXwuv",
      pos: [-10, 3, -36],
    },
    {
      key: "ugVdzOBGu-vsgznyN9UqF",
      pos: [-10, 2, -36],
    },
    {
      key: "OBzNrDt6NScxeZjN8nNmf",
      pos: [-10, 1, -36],
    },
    {
      key: "zuz0Bxbz6glj0XTURg__r",
      pos: [-10, 5, -37],
    },
    {
      key: "aY5pLcD6vK5nc1edJnWds",
      pos: [-10, 4, -37],
    },
    {
      key: "5nn4D3qz4GwDviYTFCio6",
      pos: [-10, 3, -37],
    },
    {
      key: "hj5Uq0jzMBZhPmoQuRgjD",
      pos: [-10, 2, -37],
    },
    {
      key: "8NF-t261_0rkgCarriojV",
      pos: [-10, 1, -37],
    },
    {
      key: "WEGno4kwz1_mUBcPVrMLS",
      pos: [-10, 5, -38],
    },
    {
      key: "Ndoez5Xhvr2F0goW_v51m",
      pos: [-10, 4, -38],
    },
    {
      key: "aL9o1tZl-f_JVUZB8Mc-0",
      pos: [-10, 3, -38],
    },
    {
      key: "5dR4NUO4gDys1Fnm0vfuX",
      pos: [-10, 2, -38],
    },
    {
      key: "8VfsAKTZJJA8rWEmk_QOw",
      pos: [-10, 1, -38],
    },
    {
      key: "9Pqsiv0wk_jm6T-Fb1gAk",
      pos: [-6, 5, -38],
    },
    {
      key: "oClpg3PAqdVNOm1ltyXRf",
      pos: [-6, 4, -38],
    },
    {
      key: "konBNCYUK9_NcCbK6DgKf",
      pos: [-6, 3, -38],
    },
    {
      key: "qKQrZlDkMud0taYv8swD_",
      pos: [-6, 2, -38],
    },
    {
      key: "f6IF3cQqkGilQIQQw96t1",
      pos: [-6, 1, -38],
    },
    {
      key: "qqWk_1l5UJkLJ6gGALNnZ",
      pos: [-7, 5, -38],
    },
    {
      key: "HwfvpqhcuA5l9zOh1Km33",
      pos: [-7, 4, -38],
    },
    {
      key: "sP2SIOpWH83aC1gWkfIj3",
      pos: [-7, 3, -38],
    },
    {
      key: "gt-wFjOD1jU-FgBz_d5IS",
      pos: [-7, 2, -38],
    },
    {
      key: "DRNo0VP7nPKu_CFS6rjXk",
      pos: [-7, 1, -38],
    },
    {
      key: "VivSkM-IEVUEOVXLr9wrq",
      pos: [-8, 5, -38],
    },
    {
      key: "rXIOzpjiJ0AvyzloDE15h",
      pos: [-8, 4, -38],
    },
    {
      key: "Rf28gkyZ-aYKuJ_c9rb90",
      pos: [-8, 3, -38],
    },
    {
      key: "ppDfSMh8aPlWhdu2amrjn",
      pos: [-8, 2, -38],
    },
    {
      key: "McwSef_QPi-BmbY2pHxtb",
      pos: [-8, 1, -38],
    },
    {
      key: "y92jj_SEW-RMObDEkSatj",
      pos: [-9, 5, -38],
    },
    {
      key: "NueYYaRUaxj82S5a8NL66",
      pos: [-9, 4, -38],
    },
    {
      key: "9ErEqHmFH7-ET-yqpIrO-",
      pos: [-9, 3, -38],
    },
    {
      key: "HnqBGOGZTnWcN_1VYgSLc",
      pos: [-9, 2, -38],
    },
    {
      key: "db4AvPBDpQq5ay0F4IGoJ",
      pos: [-9, 1, -38],
    },
    {
      key: "A5cMS6DD1OsTu7wnBAKXh",
      pos: [-17, 6, -20],
    },
    {
      key: "IreIDElJh1Rka-5bz9LwJ",
      pos: [-16, 6, -20],
    },
    {
      key: "K0EcT8QGDL-v5Gw6CcH9V",
      pos: [-15, 6, -20],
    },
    {
      key: "FXZrqo02bJ6fqoSgqs0rF",
      pos: [-14, 6, -20],
    },
    {
      key: "2oYsPDxAMm8iMxulAAeKz",
      pos: [-14, 5, -20],
    },
    {
      key: "XCsbkkOIqRHjo9u2Y_mtt",
      pos: [-14, 4, -20],
    },
    {
      key: "U6Gl6dKX-vayCy2-UU4V3",
      pos: [-14, 3, -20],
    },
    {
      key: "m-KxaBzKYqQOROK4jvt99",
      pos: [-14, 2, -20],
    },
    {
      key: "mZDfE7Dpy7OxxgvFmgRhs",
      pos: [-14, 1, -20],
    },
    {
      key: "MxwPiYWSrnM6Y4yBkcbZ8",
      pos: [-17, 3, -20],
    },
    {
      key: "mp9yhAA7cbzeTK3k5nXDR",
      pos: [-16, 3, -20],
    },
    {
      key: "IAEbss0ogcj2oBcwqzBgO",
      pos: [-15, 3, -20],
    },
    {
      key: "FOWGX71DTSgF56sLjgSen",
      pos: [-21, 1, -20],
    },
    {
      key: "A2UZVfnDUuRKlHaflz9DF",
      pos: [-22, 1, -20],
    },
    {
      key: "SK-XPpNIYPftzc_cBjLXc",
      pos: [-23, 1, -20],
    },
    {
      key: "R7PfpF2x78yF3mhulHbKM",
      pos: [-23, 6, -20],
    },
    {
      key: "VpP6qe4rm_l8rGY3DiaQ9",
      pos: [-17, 5, -20],
    },
    {
      key: "OACPA7tifXx59FHO7wKLV",
      pos: [-17, 4, -20],
    },
    {
      key: "kmuUmNGhW1d2KQhMnLMlE",
      pos: [-17, 2, -20],
    },
    {
      key: "ujD8V_ZujF-bjQMXykMs6",
      pos: [-17, 1, -20],
    },
    {
      key: "EG35hTGHGQiAJkneXsXi7",
      pos: [-20, 1, -20],
    },
    {
      key: "H0q_dUY_dR4Oezki5m8bR",
      pos: [-19, 1, -20],
    },
    {
      key: "v3SSzq6wIKeE0Saov2mLg",
      pos: [-22, 6, -20],
    },
    {
      key: "NOT3SsI5GXM1kckDXdBWv",
      pos: [-21, 6, -20],
    },
    {
      key: "qJHJkbzufEci8KiuI6ZAy",
      pos: [-20, 6, -20],
    },
    {
      key: "ij8Dbt2Q2_sFUuexJ5UWM",
      pos: [-19, 6, -20],
    },
    {
      key: "q0o6-tDfSUlNS00qtaG71",
      pos: [-21, 2, -20],
    },
    {
      key: "aMGwhTOA6WzvWty7k9UA2",
      pos: [-21, 3, -20],
    },
    {
      key: "n0RbyiMog7ZOLPRhufnZI",
      pos: [-21, 5, -20],
    },
    {
      key: "bpHC9TSYQXqw7DBQLu-8I",
      pos: [-21, 4, -20],
    },
    {
      key: "YSNL4uq44INP9oSTxtpPJ",
      pos: [-25, 4, -20],
    },
    {
      key: "vP7nBFka5Hj0jLkXVbeg8",
      pos: [-25, 5, -20],
    },
    {
      key: "K-sicgB4uIbG-OV8qJGb3",
      pos: [-25, 6, -20],
    },
    {
      key: "KJIAwygbrj9_l0Y6k755g",
      pos: [-26, 6, -20],
    },
    {
      key: "DdJz5R3WTztPT_Gzz3Cvc",
      pos: [-27, 6, -20],
    },
    {
      key: "f8T9AfxSRuX99a09hWZvZ",
      pos: [-28, 6, -20],
    },
    {
      key: "qgqOAOwwg6PhRkEPw629r",
      pos: [-29, 6, -20],
    },
    {
      key: "0rOWZUx6rWLz4ji05w7EB",
      pos: [-29, 3, -20],
    },
    {
      key: "tIa97N8MltDtWRJF6QNHt",
      pos: [-29, 2, -20],
    },
    {
      key: "csBsXRoyRomsd-8rJuNLP",
      pos: [-25, 3, -20],
    },
    {
      key: "gaTX3DX6imumhjedTsWEL",
      pos: [-26, 3, -20],
    },
    {
      key: "BboElNv99M8Tm-OUXtkjI",
      pos: [-26, 2, -20],
    },
    {
      key: "B90Q4goj2tk3kcBlPxhQB",
      pos: [-26, 1, -20],
    },
    {
      key: "munxsTyZargq9fL1gRic5",
      pos: [-25, 1, -20],
    },
    {
      key: "f0m-dzZQLEKEDhsJW_t-3",
      pos: [-29, 1, -20],
    },
    {
      key: "X8FMzkgZE5qEwI4_XOS06",
      pos: [-29, 5, -20],
    },
    {
      key: "HESDo48uJKREdICKNE252",
      pos: [-29, 4, -20],
    },
    {
      key: "YoBNoDCoC6nNjo3xKLWkx",
      pos: [-31, 1, -20],
    },
    {
      key: "TjlRyNXA17rd1J9BZ0zLn",
      pos: [-32, 1, -20],
    },
    {
      key: "GN4PhYlne4FPe2OgdUEZa",
      pos: [-33, 1, -20],
    },
    {
      key: "AsMIRIwxfKvQrHilLwPIL",
      pos: [-34, 1, -20],
    },
    {
      key: "vmuOj13Fgb0NmT8pcEqXy",
      pos: [-34, 2, -20],
    },
    {
      key: "LDyhXN3oPn3Jt5mA8D2ds",
      pos: [-34, 3, -20],
    },
    {
      key: "8xR42dZdGAphTAEXvoD9w",
      pos: [-34, 4, -20],
    },
    {
      key: "g0JXNSo1p-MrIYHyH3Wwh",
      pos: [-34, 5, -20],
    },
    {
      key: "8HQmPDhNUErIn3sQfSLTi",
      pos: [-34, 6, -20],
    },
    {
      key: "WnkrzAZhwj3DNZzDwbGMQ",
      pos: [-33, 6, -20],
    },
    {
      key: "Rtm_WGY4mhns-cmlSFTIb",
      pos: [-32, 6, -20],
    },
    {
      key: "FXLjRqJxPM66ZbinciU3J",
      pos: [-31, 6, -20],
    },
    {
      key: "kf2OlSNDFw1genHVZmtCX",
      pos: [-33, 3, -20],
    },
    {
      key: "nw52lNW_SGb_-tjfc3bLR",
      pos: [-33, 4, -20],
    },
    {
      key: "kzVvcVpLIR-vdqzEBgvFS",
      pos: [-32, 4, -20],
    },
    {
      key: "V7-pkN0ZuyKGKkGFx9t2B",
      pos: [-32, 3, -20],
    },
    {
      key: "VX8717aYUWPhCGjlWb8v3",
      pos: [-31, 4, -20],
    },
    {
      key: "8dIntST63OZwUbIKNwkAM",
      pos: [-31, 3, -20],
    },
    {
      key: "3boclKp0N7UFdEjdh48Nq",
      pos: [-35, 6, -20],
    },
    {
      key: "KSLnVYQ---tk-ui6_tYia",
      pos: [-35, 5, -20],
    },
    {
      key: "FAuJbR1FTj4mmiXqkxSn8",
      pos: [-35, 4, -20],
    },
    {
      key: "nYNlTRhXI0n23dmxe4y6f",
      pos: [-35, 3, -20],
    },
    {
      key: "CQ_Kns_Vf5Pv2nt1HbW83",
      pos: [-35, 2, -20],
    },
    {
      key: "g0hWKpHA09QIQ6GFbykQv",
      pos: [-35, 1, -20],
    },
    {
      key: "N0JMQ8HGyg3T2QjPuMS7A",
      pos: [-41, 1, -20],
    },
    {
      key: "1GqQL-0xEd7VS96fFyG17",
      pos: [-41, 2, -20],
    },
    {
      key: "tRxPTdNv8PP_ZXRZLfv6D",
      pos: [-41, 3, -20],
    },
    {
      key: "A0ZAUKdrEIsGtoylZobKv",
      pos: [-41, 4, -20],
    },
    {
      key: "jEBWY5t0Doge3-9fPA8mn",
      pos: [-41, 5, -20],
    },
    {
      key: "G77cbk98_FvzzVbMrHH86",
      pos: [-41, 6, -20],
    },
    {
      key: "6oVRaZJggXrAn4-I6sEz7",
      pos: [-40, 6, -20],
    },
    {
      key: "fcenXRtZ7VfaT2lnC3SWZ",
      pos: [-39, 6, -20],
    },
    {
      key: "GAMGSjqU1M4aJGrH6x9Jx",
      pos: [-38, 6, -20],
    },
    {
      key: "thccePET6leI7cKMj-Af9",
      pos: [-40, 3, -20],
    },
    {
      key: "Gjp_kEarD4SYKBmDKqS5g",
      pos: [-39, 3, -20],
    },
    {
      key: "UG65kTzeWgUvsE5-bb16o",
      pos: [-38, 3, -20],
    },
    {
      key: "jELJFCT8qpOa_UYKUnENG",
      pos: [-37, 6, -20],
    },
    {
      key: "2aciOoGPItCmRdqFDtXjR",
      pos: [-37, 3, -20],
    },
    {
      key: "jSOq2Y92oc8_s2g2y6jsl",
      pos: [13, 1, -20],
    },
    {
      key: "LxrkCfcFlKwfUBADfAEiN",
      pos: [13, 2, -20],
    },
    {
      key: "sm7iKq8kOtYrFnBPmU0f5",
      pos: [13, 3, -20],
    },
    {
      key: "EBT0hsoXbio9YM8CBmRDo",
      pos: [13, 4, -20],
    },
    {
      key: "ZnD88szet9jlsnU6kz05I",
      pos: [13, 5, -20],
    },
    {
      key: "Fr8W5OCSeEQspS6pqhG2e",
      pos: [14, 1, -20],
    },
    {
      key: "gPJwR0W48aUu3S9vaX006",
      pos: [15, 1, -20],
    },
    {
      key: "idRkWBPKFaM91HtXGBYut",
      pos: [16, 1, -20],
    },
    {
      key: "iFBpv0iXCAaf2SnGc3bJ8",
      pos: [13, 6, -20],
    },
    {
      key: "niGAz2fjGhoIQEflX3Z5h",
      pos: [17, 1, -20],
    },
    {
      key: "BTcWREcekTt6pNBOwQ2RU",
      pos: [17, 2, -20],
    },
    {
      key: "m_nV7eKpvNVJlyFK_znDA",
      pos: [17, 3, -20],
    },
    {
      key: "iQKveCVy-DwROadgHXEr_",
      pos: [17, 4, -20],
    },
    {
      key: "uyYr7Pi9JkEkZvoh7qvMW",
      pos: [17, 5, -20],
    },
    {
      key: "cI9_k9OrjS7jXOdbftdid",
      pos: [17, 6, -20],
    },
    {
      key: "F_CoDsFwsYd8v0_sGSR_B",
      pos: [19, 1, -20],
    },
    {
      key: "Nf7mPkH_DCRl-oIswGY2H",
      pos: [19, 2, -20],
    },
    {
      key: "gtoy_HYJdxqEVJTFJ1r84",
      pos: [19, 3, -20],
    },
    {
      key: "Krms3rbuVgMvpquftVMWz",
      pos: [19, 4, -20],
    },
    {
      key: "3AS0AABIZ1gS-uQD0acsH",
      pos: [19, 5, -20],
    },
    {
      key: "YxcAst2j85ZlWJkqn6AP2",
      pos: [19, 6, -20],
    },
    {
      key: "vqcrGoebSpBzZDw8Wr1RB",
      pos: [20, 1, -20],
    },
    {
      key: "0tCWzGne2RNBjjUjmH3eU",
      pos: [21, 1, -20],
    },
    {
      key: "SnJnNJjYgSgUDX4cQWROO",
      pos: [23, 2, -20],
    },
    {
      key: "F8ibDEkNvefYUODd_J9Q9",
      pos: [23, 3, -20],
    },
    {
      key: "idmPR3Q605Szhv96os8AV",
      pos: [22, 6, -20],
    },
    {
      key: "gSbFZdqLSxvEOD4UwItvM",
      pos: [21, 6, -20],
    },
    {
      key: "wk7FcUSSu5wgZ-9829uWS",
      pos: [20, 6, -20],
    },
    {
      key: "DAV3R9DC9Ks7jvSjZ1tgJ",
      pos: [22, 1, -20],
    },
    {
      key: "MCXr0Zhy6BajPHQ9QSC-1",
      pos: [23, 5, -20],
    },
    {
      key: "CT0MUMw7PBCwyb2wAB9vJ",
      pos: [23, 4, -20],
    },
    {
      key: "QUES8Chuo4-AQo8tvLWHc",
      pos: [25, 1, -20],
    },
    {
      key: "cbYWux4C3i6ZYEFhEX2BE",
      pos: [25, 2, -20],
    },
    {
      key: "zBeNSmLjGQ-t7FXwH1EmD",
      pos: [25, 3, -20],
    },
    {
      key: "STTmN21eCTpXST-8de_5E",
      pos: [25, 4, -20],
    },
    {
      key: "9EsDZfFQBN9pQQNhb3Zuh",
      pos: [25, 5, -20],
    },
    {
      key: "sqIk4_lS4Q4Y7fUVYvq-B",
      pos: [25, 6, -20],
    },
    {
      key: "z7Mn2aQ9DsRcRpYgz2X3H",
      pos: [26, 4, -20],
    },
    {
      key: "RVnryOgilDbDZStm25ovY",
      pos: [26, 3, -20],
    },
    {
      key: "LCBZj6gcAGZyB7X9POply",
      pos: [27, 4, -20],
    },
    {
      key: "NFG6hYBhqWdngwG1KO-PV",
      pos: [27, 3, -20],
    },
    {
      key: "tmHdRitgqmgaru5uj72hE",
      pos: [26, 1, -20],
    },
    {
      key: "8t_a2P69eOZ0MqoRu4Erm",
      pos: [28, 3, -20],
    },
    {
      key: "rzNBoHUz9gCeubPlW9eJt",
      pos: [28, 4, -20],
    },
    {
      key: "4bWSRj6F4QrLScqFnrr1Z",
      pos: [27, 1, -20],
    },
    {
      key: "dgsnfL6NbdFFt9iCB9jTb",
      pos: [28, 1, -20],
    },
    {
      key: "wjACZIcnKsoWUxRGR_U7F",
      pos: [26, 6, -20],
    },
    {
      key: "ddp_HL3rnUw_ooNcWTTlZ",
      pos: [27, 6, -20],
    },
    {
      key: "KtELboUqatwTJo5zk98nk",
      pos: [28, 6, -20],
    },
    {
      key: "8i5IS0x9q2-bQiZip3qh9",
      pos: [30, 1, -20],
    },
    {
      key: "btKHJKsVlYEuZCytwQa_9",
      pos: [30, 2, -20],
    },
    {
      key: "Wg7nfvTrNQ2Dyu7aEMwjm",
      pos: [30, 3, -20],
    },
    {
      key: "7HtU3ByNRb14qh4rs-OtC",
      pos: [30, 4, -20],
    },
    {
      key: "Aae8ck0bmM9aXSWoCLXef",
      pos: [30, 5, -20],
    },
    {
      key: "7IYRrHZbxIiP9Qt9dx0p6",
      pos: [30, 6, -20],
    },
    {
      key: "LtAabQtdgWiQm5rptwdB3",
      pos: [31, 6, -20],
    },
    {
      key: "2U56ICTqSipesSyrv0ja3",
      pos: [32, 6, -20],
    },
    {
      key: "1NwygOmC8gIQFuOwtOb7M",
      pos: [32, 5, -20],
    },
    {
      key: "JxzHpY0fA6GJZrO680228",
      pos: [33, 4, -20],
    },
    {
      key: "IhDf3ZDAwTWqod9yuRWOb",
      pos: [35, 6, -20],
    },
    {
      key: "3NpsHizLMCecxhVo4X1LY",
      pos: [34, 5, -20],
    },
    {
      key: "r7wre08_gmA7eIB3vIKEc",
      pos: [36, 6, -20],
    },
    {
      key: "OCFXKkxsASW4UK8HamIcT",
      pos: [36, 5, -20],
    },
    {
      key: "-Q4YsXwskn9buLjeQVZvv",
      pos: [36, 4, -20],
    },
    {
      key: "WSXLqxDvqRpsFT148G94o",
      pos: [36, 3, -20],
    },
    {
      key: "nsJESNsLlOnOsSwOwhy6n",
      pos: [34, 6, -20],
    },
    {
      key: "w52M1d7rMMCm3BNjXcROI",
      pos: [36, 2, -20],
    },
    {
      key: "pyKuWwKZriNPUyAAS2xFG",
      pos: [36, 1, -20],
    },
    {
      key: "MFX6-VIoVV8mjLBMxvuP3",
      pos: [-9, 1, -37],
    },
    {
      key: "C3MlvlSCOYrw8AVqtrOz1",
      pos: [-8, 1, -37],
    },
    {
      key: "TBxtYbMFLKEgxnHFXRYcz",
      pos: [-7, 1, -37],
    },
    {
      key: "Gn6iN2nIiass5-JU5AvTa",
      pos: [-6, 1, -37],
    },
    {
      key: "cQnfQlgSPpRrXzduzU0FJ",
      pos: [-9, 1, -36],
    },
    {
      key: "asBoHSUv4n7hcoE0AJJ6E",
      pos: [-8, 1, -36],
    },
    {
      key: "xlYi8HqK679uSBz-HmGN-",
      pos: [-7, 1, -36],
    },
    {
      key: "brefps5vkYzP8YYv7rdwE",
      pos: [-7, 1, -35],
    },
    {
      key: "DRhmW-yFNCD7-sG6o0AWX",
      pos: [-6, 1, -36],
    },
    {
      key: "wc0LNNawesa-l3138nZKs",
      pos: [-6, 1, -35],
    },
    {
      key: "ViGqRHff-oFdT5TEJm4pS",
      pos: [-8, 1, -35],
    },
    {
      key: "SxZinB6qXcXaa_1QbuiUa",
      pos: [-9, 1, -35],
    },
    {
      key: "s5JcZ2Mn-iD-IMNohoo0d",
      pos: [-5, 1, -37],
    },
    {
      key: "_eXVulEK1JYCQVdVrUsWN",
      pos: [-5, 1, -36],
    },
    {
      key: "CP-QS8725vp6eyHLD5Xwj",
      pos: [-5, 1, -35],
    },
    {
      key: "aHxfq138aX3VtdOD_LBYj",
      pos: [-9, 1, -34],
    },
    {
      key: "OskI_uKAAtjp7vCTdVJx6",
      pos: [-8, 1, -34],
    },
    {
      key: "lqOMdBTHde1VF-Ev4gmZ7",
      pos: [-7, 1, -34],
    },
    {
      key: "T-UmuYOYxcbxQ7co5aWQ3",
      pos: [-6, 1, -35],
    },
    {
      key: "slYD_fM_3z2WLASxgD3Wb",
      pos: [-6, 1, -34],
    },
    {
      key: "eGfQqxZKjSr4kqaVJBzOh",
      pos: [-5, 1, -34],
    },
    {
      key: "4S2HSN0u6zH2Ge4gxCK2w",
      pos: [-9, 1, -33],
    },
    {
      key: "MNAnxMen_xNwRmGMApm9R",
      pos: [-8, 1, -33],
    },
    {
      key: "XXSNJbfsVdajyFB3ndjR1",
      pos: [-7, 1, -33],
    },
    {
      key: "b5oPtNMTXJQFI5acw_rL-",
      pos: [-6, 1, -33],
    },
    {
      key: "FIPXOfGRMVe8PY1q10Hus",
      pos: [-5, 1, -33],
    },
    {
      key: "twsL5VoC_PlWzXQVre7Kr",
      pos: [-4, 1, -37],
    },
    {
      key: "6A2WVqoonljDYbu627i7o",
      pos: [-3, 1, -37],
    },
    {
      key: "Yke66Dc317xNrcLOJOhlS",
      pos: [-2, 1, -37],
    },
    {
      key: "-1eimupc2kgK514xYkHTe",
      pos: [-1, 1, -37],
    },
    {
      key: "lUFxAGakVKRdtL32CIIve",
      pos: [0, 1, -37],
    },
    {
      key: "7TjzjEx-oVTHX-N5aiAx5",
      pos: [1, 1, -37],
    },
    {
      key: "W3zNHpa56SaJy4YyvoIut",
      pos: [2, 1, -37],
    },
    {
      key: "_MeT0JrLVqOVnmtTeQHLg",
      pos: [3, 1, -37],
    },
    {
      key: "JzCdLzvu_-AXDMxIjhSho",
      pos: [4, 1, -37],
    },
    {
      key: "d2LXJ69fQay6E0ZYiaxxU",
      pos: [5, 1, -37],
    },
    {
      key: "bzRc5CcSu7i2Cr5BRHmF-",
      pos: [6, 1, -37],
    },
    {
      key: "s2OBsFY-kdGAeFxUWbKFX",
      pos: [7, 1, -37],
    },
    {
      key: "2Wz2BH2VDjJLKJVZxjd8C",
      pos: [8, 1, -37],
    },
    {
      key: "ro1germz8sHA-OnM4ddBz",
      pos: [9, 1, -37],
    },
    {
      key: "OqYDU15WJz3xqGlAMuNNQ",
      pos: [-4, 1, -36],
    },
    {
      key: "hREl4f-2ZZFTbxoB0aaL3",
      pos: [-3, 1, -36],
    },
    {
      key: "mUf6wAE6UhUHiiGkmd_qm",
      pos: [-2, 1, -36],
    },
    {
      key: "ER5FrWneSGEYY49IS_2Gy",
      pos: [-1, 1, -36],
    },
    {
      key: "zmStcH7L5O93CgYRQb5Rd",
      pos: [0, 1, -36],
    },
    {
      key: "Q5t1bFpDZ46EjDimyaEdM",
      pos: [1, 1, -36],
    },
    {
      key: "Vsndc_XcykJF-oUQ_A9QL",
      pos: [2, 1, -36],
    },
    {
      key: "b6g6Vc6SHFxl003-XWv6i",
      pos: [3, 1, -36],
    },
    {
      key: "roZGLlIYhU9oqVbplMwHa",
      pos: [4, 1, -36],
    },
    {
      key: "aPRoFGrx9eYjBeEyBBFKR",
      pos: [5, 1, -36],
    },
    {
      key: "_CqKmgaMrn5LbBjAWDE--",
      pos: [6, 1, -36],
    },
    {
      key: "R_x48NMtvaqDQof8mwpYw",
      pos: [7, 1, -36],
    },
    {
      key: "DYZhfE8ty_UEyBG1kEoK7",
      pos: [8, 1, -36],
    },
    {
      key: "yuBX3c5AK0M6TLY_n-jzy",
      pos: [9, 1, -36],
    },
    {
      key: "51-14I3lG-bWXQKMuyJxp",
      pos: [-4, 1, -35],
    },
    {
      key: "SnvadmrpM10LnmzD1BMC0",
      pos: [-3, 1, -35],
    },
    {
      key: "IsupGBytHGjsqaWfUKxsB",
      pos: [-2, 1, -35],
    },
    {
      key: "I2UqcNmEQeEgwjEUD_rYq",
      pos: [-1, 1, -35],
    },
    {
      key: "xlDNkQbAocEFe8BoYhB9b",
      pos: [0, 1, -35],
    },
    {
      key: "ujXynVEMzkOJuNh6PvHiG",
      pos: [1, 1, -35],
    },
    {
      key: "0arIwmfWeHcLHY-fyN2Wh",
      pos: [2, 1, -35],
    },
    {
      key: "tZa1lB9GDSD6k606t_p6m",
      pos: [3, 1, -35],
    },
    {
      key: "K606eWlf-iZTMQtPPi4rq",
      pos: [4, 1, -35],
    },
    {
      key: "z8DmyUg053QaCP4GJBnVX",
      pos: [5, 1, -35],
    },
    {
      key: "3_NRhx6_9Fs-KkKJYcty_",
      pos: [6, 1, -35],
    },
    {
      key: "-dUL3dX89fLwV29wGLuFq",
      pos: [7, 1, -35],
    },
    {
      key: "IQW4KjzUIMd2nPX3Egy3-",
      pos: [8, 1, -35],
    },
    {
      key: "ZZA2TMKYeuNfXoZXRan2S",
      pos: [9, 1, -35],
    },
    {
      key: "4bT-ljwfW8_ugpjYGYTCi",
      pos: [-4, 1, -34],
    },
    {
      key: "DMpuHP3tWZf1D8FOhjw5M",
      pos: [-3, 1, -34],
    },
    {
      key: "Eo0Go1PVTw3rgv7exDhJx",
      pos: [-2, 1, -34],
    },
    {
      key: "d8Jf_k9pjTHf4DJgslGs5",
      pos: [-1, 1, -34],
    },
    {
      key: "3p1NN6-kUogEVatW6GIph",
      pos: [0, 1, -34],
    },
    {
      key: "c3J_ffqJFaem3Y_uGg7pr",
      pos: [1, 1, -34],
    },
    {
      key: "Pq8pHVvM_-9I3rJw45_iE",
      pos: [2, 1, -34],
    },
    {
      key: "Nepgdn32yVzW5Sotf2IZf",
      pos: [3, 1, -34],
    },
    {
      key: "5iMIs_nyqtSfOs828ei1k",
      pos: [4, 1, -34],
    },
    {
      key: "0d-g79flafI4RrrzCDhNJ",
      pos: [5, 1, -34],
    },
    {
      key: "o_c9dtad_akV-hdr-Lbly",
      pos: [6, 1, -34],
    },
    {
      key: "qG8Hrn3cP2E5GUaau_-y_",
      pos: [7, 1, -34],
    },
    {
      key: "OTql7-IgLnyxeX7WqM7ye",
      pos: [8, 1, -34],
    },
    {
      key: "yEeLt4wyH3fa2LcguADxJ",
      pos: [9, 1, -34],
    },
    {
      key: "XKn0O0Wm6ej52ZVzjLKFT",
      pos: [-4, 1, -33],
    },
    {
      key: "T2UmBIlawKWEy8jZsfvuX",
      pos: [-3, 1, -33],
    },
    {
      key: "-h4orndFow70bpvX5hp2H",
      pos: [-2, 1, -33],
    },
    {
      key: "J_nIVr833LeT9fXetBrNI",
      pos: [-1, 1, -33],
    },
    {
      key: "ibe4u_krcd9S1umq9IOIJ",
      pos: [0, 1, -33],
    },
    {
      key: "OSTGF-bFh5Lsxk9iLlull",
      pos: [1, 1, -33],
    },
    {
      key: "KUfqJbTAtN7uQNVgSpixv",
      pos: [2, 1, -33],
    },
    {
      key: "NUs6bf3-0FZ-9mB9KoB3x",
      pos: [3, 1, -33],
    },
    {
      key: "J8QVtXKyXMXW3XyO0_HZd",
      pos: [4, 1, -33],
    },
    {
      key: "2qPQFjya5ihatYXuSIWfS",
      pos: [5, 1, -33],
    },
    {
      key: "01OAOHOOGq2cX_nFPJROe",
      pos: [6, 1, -33],
    },
    {
      key: "mD_gvmr4bhXuZYB71RrOu",
      pos: [7, 1, -33],
    },
    {
      key: "PRE1AcjkxReHeXNXDBMDI",
      pos: [8, 1, -33],
    },
    {
      key: "Tk8EqGv9TI1DQkpnZI9x7",
      pos: [9, 1, -33],
    },
    {
      key: "Oe9-6r4uXG_2__zC-EWS4",
      pos: [-9, 1, -32],
    },
    {
      key: "arloex3X7gGXaMhlNNvlA",
      pos: [-8, 1, -32],
    },
    {
      key: "ahuTnOLGuJC1W-lrly6jC",
      pos: [-7, 1, -32],
    },
    {
      key: "MTeREbSyJ7fbHMj0eCLEH",
      pos: [-6, 1, -32],
    },
    {
      key: "4XlqLzmW28PFlf4-ay4A0",
      pos: [-5, 1, -32],
    },
    {
      key: "xoZarlzS9w3LyehvP9dOA",
      pos: [-4, 1, -32],
    },
    {
      key: "9_c1sfzfxX3RcNv2lfW0g",
      pos: [-3, 1, -32],
    },
    {
      key: "YqrBbfcx9lQ1iT49KHvC-",
      pos: [-2, 1, -32],
    },
    {
      key: "l7e0piC6GAQWNKLmvSs31",
      pos: [-1, 1, -32],
    },
    {
      key: "fX6xNRrFLAosHPMXjTojf",
      pos: [0, 1, -32],
    },
    {
      key: "1HGTh1r3P6ppYUa-Axcrx",
      pos: [1, 1, -32],
    },
    {
      key: "a9eFF6m0gm-CW6vWg49SG",
      pos: [2, 1, -32],
    },
    {
      key: "Aumf9jU5_o4yDFwMF096P",
      pos: [3, 1, -32],
    },
    {
      key: "aKwM9ywNEo9SlxZNwyLrA",
      pos: [4, 1, -32],
    },
    {
      key: "uPkdwm9f-Ia5Nqf3YpC3M",
      pos: [5, 1, -32],
    },
    {
      key: "oNrFzFAz6z0Paqe7N_4aG",
      pos: [6, 1, -32],
    },
    {
      key: "8Qzofv3QUeVUmuZAQ5pUB",
      pos: [7, 1, -32],
    },
    {
      key: "kUFKLu8VkVSOJpQVwYB15",
      pos: [9, 1, -32],
    },
    {
      key: "8XG_hIc5r8Kp5lSa1E6Q0",
      pos: [8, 1, -32],
    },
    {
      key: "5jaDuIjUsnxnpownD2vpO",
      pos: [-9, 1, -31],
    },
    {
      key: "sjRUcxLSOZw49QYH0jIcn",
      pos: [-8, 1, -31],
    },
    {
      key: "K26nTcCj3KfrWUxpbS3o4",
      pos: [-7, 1, -31],
    },
    {
      key: "66tYo93nBOcAFl_NvfVUt",
      pos: [-6, 1, -31],
    },
    {
      key: "ixSsy7EiaD6Fw8N35AON-",
      pos: [-5, 1, -31],
    },
    {
      key: "eZJGx6mPhWvLsjdIQWjIg",
      pos: [-4, 1, -31],
    },
    {
      key: "7AC1hhUgiSwaWqY5gYKJW",
      pos: [-3, 1, -31],
    },
    {
      key: "XMGZ6zuRHpgih0qEiqyAs",
      pos: [-2, 1, -31],
    },
    {
      key: "k8bLNY_udnv6H403p2urO",
      pos: [-1, 1, -31],
    },
    {
      key: "w8kgG1F2BfR4_lXE-yrgR",
      pos: [0, 1, -31],
    },
    {
      key: "c0AY6D0tgvFz1AfNdfMzY",
      pos: [1, 1, -31],
    },
    {
      key: "zzwRieyy_380hRxX3r9fq",
      pos: [2, 1, -31],
    },
    {
      key: "eN1hLSIB1bYmJ9bFosZ-A",
      pos: [3, 1, -31],
    },
    {
      key: "bxS2Q3MOr-xW47wD2KAf7",
      pos: [4, 1, -31],
    },
    {
      key: "qv_f_LPqX9LLpRXyUU-YV",
      pos: [5, 1, -31],
    },
    {
      key: "JSip0Vm74vGYS0xml--Ac",
      pos: [6, 1, -31],
    },
    {
      key: "6GYDfo6XiNm6PqEjW36YU",
      pos: [8, 1, -31],
    },
    {
      key: "2l9n0isoc64SeMvkQjK2M",
      pos: [9, 1, -31],
    },
    {
      key: "wmViPhA6x-qvLSVtHtPd7",
      pos: [7, 1, -31],
    },
    {
      key: "FU6nsrIx3MaLVoQUXQAfq",
      pos: [9, 1, -30],
    },
    {
      key: "oDDp7s1fK7kpKupmdnjpn",
      pos: [9, 1, -29],
    },
    {
      key: "NxyeInCoLaYrX2gM0XG_i",
      pos: [9, 1, -28],
    },
    {
      key: "E0vpFk0VitX8Jphd-AqDj",
      pos: [9, 1, -27],
    },
    {
      key: "eIY6NjZiVhMyX1hUFAwTE",
      pos: [9, 1, -26],
    },
    {
      key: "eiKyf6BzbZeIxFwo3wsqU",
      pos: [9, 1, -25],
    },
    {
      key: "FYMrEgCrIowkGIBDTTWAh",
      pos: [9, 1, -24],
    },
    {
      key: "0Cgnchrk28pIxAbttD5jt",
      pos: [9, 1, -23],
    },
    {
      key: "uosbkO2LcmGPOiQtr5V5a",
      pos: [9, 1, -22],
    },
    {
      key: "2B1vgq3Apa8ersNEbMPdz",
      pos: [9, 1, -21],
    },
    {
      key: "c8PoM5z8e6yjOt9WCreVz",
      pos: [8, 1, -30],
    },
    {
      key: "ylEWpthIh9Ozz9jgcBD9a",
      pos: [8, 1, -29],
    },
    {
      key: "5Qo8jzv1TSrSUpxP9kG0O",
      pos: [8, 1, -28],
    },
    {
      key: "kv-d8ZaMhhHwxNyqn26qE",
      pos: [8, 1, -27],
    },
    {
      key: "Nn2D9SGCLq2AEXw2JEkr5",
      pos: [8, 1, -26],
    },
    {
      key: "kjewGmD7gls9KS8R-u-5a",
      pos: [8, 1, -25],
    },
    {
      key: "lBskK1FIV3eC5R_qXQx3-",
      pos: [8, 1, -24],
    },
    {
      key: "EfbzGEj2kt0gR_R2QQ1ye",
      pos: [8, 1, -23],
    },
    {
      key: "reyFlL64WM8Aw_pOWYex9",
      pos: [8, 1, -22],
    },
    {
      key: "c_UDfUc8AYV1OjY9YkNpG",
      pos: [8, 1, -21],
    },
    {
      key: "xNywPCr3S-jQ3sgUD43se",
      pos: [7, 1, -30],
    },
    {
      key: "O2cTrTSwzusVggnHF66hN",
      pos: [7, 1, -29],
    },
    {
      key: "uXk-mP47Uvatth4ucq1OU",
      pos: [7, 1, -28],
    },
    {
      key: "lFT5xqvM9AOXpEuLRShfz",
      pos: [7, 1, -27],
    },
    {
      key: "agaJijjaWwH3uYCpHNh_O",
      pos: [7, 1, -26],
    },
    {
      key: "GT0urTIuM_K3oFBg14WfQ",
      pos: [7, 1, -25],
    },
    {
      key: "zLsiDI2NddC_cs5mUc4aN",
      pos: [7, 1, -24],
    },
    {
      key: "uvksalw-I_ReEFeJcSLFS",
      pos: [7, 1, -23],
    },
    {
      key: "HvwakxdIl0MJzD3Brj9fW",
      pos: [7, 1, -22],
    },
    {
      key: "6DKMPbiuWsH6ScxubygAn",
      pos: [7, 1, -21],
    },
    {
      key: "TRrV4sN_heIxS9HeRM7SH",
      pos: [6, 1, -30],
    },
    {
      key: "ZRScLgiUXeI0YnG9jOUrW",
      pos: [6, 1, -29],
    },
    {
      key: "ahCFjN26ILV46JlBqfXqt",
      pos: [6, 1, -28],
    },
    {
      key: "c2jXtUDo-W7eDxb-cs2VP",
      pos: [6, 1, -27],
    },
    {
      key: "Lubsdu8pnDaVnmUv6AT2u",
      pos: [6, 1, -26],
    },
    {
      key: "7NMtrSLPBvegYmdUp8HGa",
      pos: [6, 1, -25],
    },
    {
      key: "YF_WEQx8GCgB34DEX6G5u",
      pos: [6, 1, -24],
    },
    {
      key: "5RlV0Mn3i4CNDEK4QS6vU",
      pos: [6, 1, -23],
    },
    {
      key: "lT2mKlZrUYzbq7rq8q0tc",
      pos: [6, 1, -22],
    },
    {
      key: "o39uwgAJDpSnyFfi876zJ",
      pos: [6, 1, -21],
    },
    {
      key: "ERwSULPgHHom2NNGODU8h",
      pos: [5, 1, -30],
    },
    {
      key: "Ii2dUh-YO_ar8RA8f1xqy",
      pos: [5, 1, -29],
    },
    {
      key: "ix03XrL-Ev1ysDEvG6IBl",
      pos: [5, 1, -28],
    },
    {
      key: "X3FdgXWEtn5f2nsDEWsqy",
      pos: [5, 1, -27],
    },
    {
      key: "SHhHS6KN87R_6YdRsFylr",
      pos: [5, 1, -26],
    },
    {
      key: "-NogG62HY0SEcimzI8ZGg",
      pos: [5, 1, -25],
    },
    {
      key: "DxX8Dqcw3VpLg5bzDwzm7",
      pos: [5, 1, -24],
    },
    {
      key: "jDaCbqE0YwOd4nKTTBFMS",
      pos: [5, 1, -23],
    },
    {
      key: "X0rLmn__EZM5HqeW4taBy",
      pos: [5, 1, -22],
    },
    {
      key: "zGHPaINRmMvJM5p4DNf73",
      pos: [5, 1, -21],
    },
    {
      key: "A5AnAYqS8zmJ2JpD3J6eW",
      pos: [4, 1, -30],
    },
    {
      key: "wA9t3JLgg_sDcO1EyorkN",
      pos: [4, 1, -29],
    },
    {
      key: "hlqlPHyUbl0Omceb0eN3-",
      pos: [4, 1, -28],
    },
    {
      key: "IDbUrxIH_6o2JC5Xwp0w9",
      pos: [4, 1, -27],
    },
    {
      key: "sjRTicxP6yfPKt0-8_LpS",
      pos: [4, 1, -26],
    },
    {
      key: "t9KDlL2QKtwYhEhn6AWqQ",
      pos: [4, 1, -25],
    },
    {
      key: "twaN1bc14ZZkY1aIDt7c0",
      pos: [4, 1, -24],
    },
    {
      key: "w56ODyCOI1CcnmV4JxVZM",
      pos: [4, 1, -23],
    },
    {
      key: "cZVrwBNB6-xSsPGG6MHFF",
      pos: [4, 1, -22],
    },
    {
      key: "s5M7ao0zpzSABnFKXjxSx",
      pos: [4, 1, -21],
    },
    {
      key: "XXckOsF1l1eUnc1-aMev8",
      pos: [3, 1, -30],
    },
    {
      key: "AsX6WTQ7Bb0ry85xHumu4",
      pos: [3, 1, -29],
    },
    {
      key: "jmKBjGL7I9-xxzD2qc_3g",
      pos: [3, 1, -28],
    },
    {
      key: "6js2yO3mEkO1QJqN7jkYO",
      pos: [3, 1, -27],
    },
    {
      key: "JlYHz6G35_aN76tj6cD-t",
      pos: [3, 1, -26],
    },
    {
      key: "7RVtfv7y2pP0f2d-MdiXZ",
      pos: [3, 1, -25],
    },
    {
      key: "46HRY_WbPzr9WD8WZE87X",
      pos: [3, 1, -24],
    },
    {
      key: "2CPCdA5IjUAT7Zw4Axs_n",
      pos: [3, 1, -23],
    },
    {
      key: "wnzbf78r5Yjv_Zc_gg-kA",
      pos: [3, 1, -22],
    },
    {
      key: "NnznEHVLBwWkhC6MEKWw5",
      pos: [3, 1, -21],
    },
    {
      key: "AKWibF1rukRA-a5zvd9GQ",
      pos: [2, 1, -30],
    },
    {
      key: "DGGajyO975CxP1iTo_BLV",
      pos: [2, 1, -29],
    },
    {
      key: "Ynr9zbSLpIbaGJXo8vZZI",
      pos: [2, 1, -28],
    },
    {
      key: "ZEvyIqHeYiUBnbj0QSF_r",
      pos: [2, 1, -27],
    },
    {
      key: "N7qzk5r0Xnrtrk3xVmuvj",
      pos: [2, 1, -26],
    },
    {
      key: "2nUUWh-9RI7Ls0RabsDav",
      pos: [2, 1, -25],
    },
    {
      key: "klo3oM081NlZYJbDOiXU2",
      pos: [2, 1, -24],
    },
    {
      key: "MICgz5pw58AKltzFErkff",
      pos: [2, 1, -23],
    },
    {
      key: "ATif9qQgaJXQab41EDJAP",
      pos: [2, 1, -22],
    },
    {
      key: "PMbHzGUBGTWtTsUqucSc5",
      pos: [2, 1, -21],
    },
    {
      key: "rrVA-fAsgEA06IRkIBRKM",
      pos: [-9, 1, -30],
    },
    {
      key: "O8rcbAsHwJy0cL9E2U6DS",
      pos: [-8, 1, -30],
    },
    {
      key: "mTettfT9MfW0NiUjyRmbb",
      pos: [-7, 1, -30],
    },
    {
      key: "yR4ojgFmRcG6v8b6q56l-",
      pos: [-6, 1, -30],
    },
    {
      key: "_piz88av74BFCnpnPT_DG",
      pos: [-5, 1, -30],
    },
    {
      key: "2-O2yoM0uOblexGjlZEyP",
      pos: [-4, 1, -30],
    },
    {
      key: "BerN0hMgAdddXHLSGYmLa",
      pos: [-3, 1, -30],
    },
    {
      key: "q3tNZ1nCzkie9IZ01BYeL",
      pos: [-2, 1, -30],
    },
    {
      key: "RmsJsXpzLlG_zM33Ugbe4",
      pos: [-1, 1, -30],
    },
    {
      key: "uHG95O7wOFhtbBXjlgEJM",
      pos: [0, 1, -30],
    },
    {
      key: "FNKVBWwrOf-FTomtKEfmz",
      pos: [1, 1, -30],
    },
    {
      key: "bTx0mCjjK9WDVEBN1AP0y",
      pos: [-9, 1, -29],
    },
    {
      key: "WYTlGacP4uhCO_QjIjz9R",
      pos: [-8, 1, -29],
    },
    {
      key: "5EZSC0q9mK9tTkc0TXjrj",
      pos: [-7, 1, -29],
    },
    {
      key: "RIQbbdoB3eRSendLPVUI6",
      pos: [-6, 1, -29],
    },
    {
      key: "viURRY0j3hGEXzmdv9lim",
      pos: [-5, 1, -29],
    },
    {
      key: "laQ564KreCo6oTimNERrI",
      pos: [-4, 1, -29],
    },
    {
      key: "Ba1IN5gN9rd8ubZHbmfat",
      pos: [-3, 1, -29],
    },
    {
      key: "P9EUyE7Xd5tcHfB3L8mcT",
      pos: [-2, 1, -29],
    },
    {
      key: "_mKX1xE3SfVn4Z6fRX2an",
      pos: [-1, 1, -29],
    },
    {
      key: "xg8raaG8T_m65aMiBgmVw",
      pos: [0, 1, -29],
    },
    {
      key: "AcWCDA8NdN7Lpc8LPCHrJ",
      pos: [1, 1, -29],
    },
    {
      key: "QxhhaJgiySP1vdHQX0-qT",
      pos: [1, 1, -28],
    },
    {
      key: "nmz7cq7OmmfnS6Glne_og",
      pos: [0, 1, -28],
    },
    {
      key: "9R4bw2hrQi1zsgeaQCgI3",
      pos: [-1, 1, -28],
    },
    {
      key: "ZtjYPjVuIRigIT4eHcl_D",
      pos: [-2, 1, -28],
    },
    {
      key: "ZKKMHZrPnBNlFfMtGVY-T",
      pos: [-3, 1, -28],
    },
    {
      key: "014elHxuwuFputxdf3eqp",
      pos: [-4, 1, -28],
    },
    {
      key: "G2JtQ3gygN8lHbo7ljTDi",
      pos: [-5, 1, -28],
    },
    {
      key: "LSwHJb68m2lvwnxejl0z8",
      pos: [-6, 1, -28],
    },
    {
      key: "SEcEPHwBN1EuPHr_27yTj",
      pos: [-7, 1, -28],
    },
    {
      key: "A7MURrx315WirlHHDaXTX",
      pos: [-8, 1, -28],
    },
    {
      key: "11s62hj4riv1h678yaylp",
      pos: [-9, 1, -28],
    },
    {
      key: "xKHV85CeDxd1x9CPARj8M",
      pos: [-9, 1, -27],
    },
    {
      key: "N5J5Zf1swTtUYQOjIxJxh",
      pos: [-9, 1, -26],
    },
    {
      key: "3U6C6IXSa6dj0QG3PVjS2",
      pos: [-9, 1, -25],
    },
    {
      key: "RFl7c2pQyxH0u8dNyAR4D",
      pos: [-9, 1, -24],
    },
    {
      key: "ZsRl8nWKYrW6KGC-v97Jr",
      pos: [-9, 1, -23],
    },
    {
      key: "pMzox_HVOKvJxmTSvYRe6",
      pos: [-9, 1, -22],
    },
    {
      key: "OdjmpeR7xK8lj___gxRCk",
      pos: [-9, 1, -21],
    },
    {
      key: "_B0ZJVzsQBb1Jc2jHmkkd",
      pos: [-8, 1, -27],
    },
    {
      key: "9BwyNbCQrm2ZhIpeiw8A_",
      pos: [-8, 1, -26],
    },
    {
      key: "yGEgMEGBgqDOlYlAYXe0p",
      pos: [-8, 1, -25],
    },
    {
      key: "cDPOoLOpXMqD1bOLHkog9",
      pos: [-8, 1, -24],
    },
    {
      key: "hqiFIxPF-MKL5pSwjP-ls",
      pos: [-8, 1, -23],
    },
    {
      key: "GuHlvHWwf4cJTUhs0hnk-",
      pos: [-8, 1, -22],
    },
    {
      key: "ilbESrqhZSl2oGhaziYbo",
      pos: [-8, 1, -21],
    },
    {
      key: "SE6RmolFnNTqWEC9_R0Bt",
      pos: [-7, 1, -27],
    },
    {
      key: "8l_MZ98kjZuCdx6Fagbsn",
      pos: [-7, 1, -26],
    },
    {
      key: "P1Wln30SnDjQscMS0a5Ht",
      pos: [-7, 1, -25],
    },
    {
      key: "jUt0leYcft2LNgP8xlKkV",
      pos: [-7, 1, -24],
    },
    {
      key: "vGLPaxtC8U1k3iMQcpL5C",
      pos: [-7, 1, -23],
    },
    {
      key: "YYKFP_ZGTnaPEuGsAjVDy",
      pos: [-7, 1, -22],
    },
    {
      key: "Q3HBRBN8XqTalQfD5Di2B",
      pos: [-7, 1, -21],
    },
    {
      key: "LeefapEmSmdVkezdAYiSy",
      pos: [-6, 1, -21],
    },
    {
      key: "AnVwf4aOYYDrSEhknVTg6",
      pos: [-5, 1, -21],
    },
    {
      key: "8UvOtdVRCd8reVekH5SiO",
      pos: [-4, 1, -21],
    },
    {
      key: "_P4tYqu5kpZiUUpfeQ769",
      pos: [-3, 1, -21],
    },
    {
      key: "uKNBS0U_7YtfNawSvL-jr",
      pos: [-2, 1, -21],
    },
    {
      key: "9Mdd-BVbbDKqJHnWG1TSZ",
      pos: [-1, 1, -21],
    },
    {
      key: "CC-BiY5kc3dg1-eIodn2j",
      pos: [-1, 1, -22],
    },
    {
      key: "GTmSET9mAcoQ9c4AZldwy",
      pos: [-1, 1, -23],
    },
    {
      key: "dgFdCQbHY-2wMKXnsIVuZ",
      pos: [-1, 1, -24],
    },
    {
      key: "YGg_F5nHhPkj5CLp3QZlN",
      pos: [-1, 1, -25],
    },
    {
      key: "Ayf3IOWMpeBzciXUOBUrU",
      pos: [-1, 1, -26],
    },
    {
      key: "kG60TdfsTt5qOwZV3MlHB",
      pos: [-1, 1, -27],
    },
    {
      key: "-qBrzI8OoO2AZ6QjPf6Hh",
      pos: [-2, 1, -22],
    },
    {
      key: "KDBYDeLaDBZvYlYTQ4BYL",
      pos: [-2, 1, -23],
    },
    {
      key: "7G8dbAL6HRYAReeyaYKjw",
      pos: [-2, 1, -24],
    },
    {
      key: "bsyO9xcvpVD00fF3N0PUy",
      pos: [-2, 1, -25],
    },
    {
      key: "bj_FpgRBdFSqkpGokgCV3",
      pos: [-2, 1, -26],
    },
    {
      key: "AjLqYqRZg0Jlc4xyzcSvJ",
      pos: [-2, 1, -27],
    },
    {
      key: "An3cSre75LNWQWRVirmgw",
      pos: [-3, 1, -22],
    },
    {
      key: "a4VOouyIQTpcv6G3t9jP-",
      pos: [-3, 1, -23],
    },
    {
      key: "8Rlv2xizdRryLeh4XLuua",
      pos: [-3, 1, -24],
    },
    {
      key: "hhcEf6EIrnWmuOkbtCdIt",
      pos: [-3, 1, -25],
    },
    {
      key: "SIK-XbjvSbLdJ0rs1FZxC",
      pos: [-3, 1, -26],
    },
    {
      key: "XeeuNNCTS5x_1y15Ku6TR",
      pos: [-3, 1, -27],
    },
    {
      key: "e1fhAaPv7SJ7I4AC7KPCa",
      pos: [-4, 1, -22],
    },
    {
      key: "woOfvb3HaXb-rvwyh5zVF",
      pos: [-4, 1, -23],
    },
    {
      key: "Qp_YJi810YccWcinEU3NA",
      pos: [-4, 1, -24],
    },
    {
      key: "CW3HIdbwcP5Az4b66bPqX",
      pos: [-4, 1, -25],
    },
    {
      key: "d6r39HT2Av1jiU9rUZHD_",
      pos: [-4, 1, -26],
    },
    {
      key: "qwGZ2rA-F15BkSRldgGIX",
      pos: [-4, 1, -27],
    },
    {
      key: "KYnsmKPCShR-Bga4XKval",
      pos: [-5, 1, -22],
    },
    {
      key: "17rnJEzhCYv145oehxX1b",
      pos: [-5, 1, -23],
    },
    {
      key: "VgEB-cuaTlk9Q3mXCHxuM",
      pos: [-5, 1, -24],
    },
    {
      key: "kmH9RBszftYMmleumS3qe",
      pos: [-5, 1, -25],
    },
    {
      key: "Cik4l_hnzKJszJZAZIP14",
      pos: [-5, 1, -26],
    },
    {
      key: "FHUF5SKr-URH_pW07kbEA",
      pos: [-5, 1, -27],
    },
    {
      key: "AjoLLJlnPwjXsv8EraIvU",
      pos: [-6, 1, -22],
    },
    {
      key: "_qBHPRN92jAdeAoI5yoDO",
      pos: [-6, 1, -23],
    },
    {
      key: "9OAaR-IVloIdFjtj-v36E",
      pos: [-6, 1, -24],
    },
    {
      key: "B14kyzS2Ypq63oYEj4-4c",
      pos: [-6, 1, -25],
    },
    {
      key: "p6vp3zBv8QhHDohiRVZec",
      pos: [-6, 1, -26],
    },
    {
      key: "htURyI8esd4Hjc-w_5gQs",
      pos: [-6, 1, -27],
    },
    {
      key: "NGrHLtoouNAkSVawfDOe-",
      pos: [0, 1, -27],
    },
    {
      key: "YkyG-i0DaPkwEziyzyEa0",
      pos: [0, 1, -26],
    },
    {
      key: "9sAeYO3dvh_SI7MH7uIBt",
      pos: [0, 1, -25],
    },
    {
      key: "k7ff-_HpfMlUQ2je13u8g",
      pos: [0, 1, -24],
    },
    {
      key: "vkcQShGjlUydwnyYhlyi4",
      pos: [0, 1, -23],
    },
    {
      key: "qk6tOOSRkw9mnzLEXoU0P",
      pos: [0, 1, -22],
    },
    {
      key: "BQK8ZabqOH2nxfj17qU8W",
      pos: [0, 1, -21],
    },
    {
      key: "vNmUlUX6Nnq0ZPfwq1A0u",
      pos: [1, 1, -27],
    },
    {
      key: "9I3LRfDGs1L_fsIKJBMSb",
      pos: [1, 1, -26],
    },
    {
      key: "_lhNVe5ORRKpwbJvIdNAM",
      pos: [1, 1, -25],
    },
    {
      key: "aVRWoKWBmOJ-3vftyXdk7",
      pos: [1, 1, -24],
    },
    {
      key: "tLmsy_ppklvP_KmJtvaHx",
      pos: [1, 1, -23],
    },
    {
      key: "Bl9owoq5Tn0tHMFaNxZIL",
      pos: [1, 1, -22],
    },
    {
      key: "j82BG7cqK-p7Pmib19BRe",
      pos: [1, 1, -21],
    },
    {
      key: "HQjNyp37gHGfIHzga-tR3",
      pos: [10, 6, -20],
    },
    {
      key: "20mlcG09seCTEvevhgH6R",
      pos: [9, 6, -20],
    },
    {
      key: "05gsyBT5WrQEEvWNbTAIB",
      pos: [8, 6, -20],
    },
    {
      key: "mZ5KIojzyto8_yB9CdAzZ",
      pos: [7, 6, -20],
    },
    {
      key: "Pd1492lip2LZQM4xoIB1_",
      pos: [6, 6, -20],
    },
    {
      key: "GlRcmRnJ3wspR8C2SI3-s",
      pos: [5, 6, -20],
    },
    {
      key: "NRfLX1ePjX89r98YYWmRH",
      pos: [4, 6, -20],
    },
    {
      key: "i2-vIgSO5jub4Gn5hpSJU",
      pos: [3, 6, -20],
    },
    {
      key: "yTcztRjIFDhf176-1E2k_",
      pos: [2, 6, -20],
    },
    {
      key: "M783TpP_zDMAY3K3Q6lUU",
      pos: [1, 6, -20],
    },
    {
      key: "KE8RYbCvjIPqc1GdXug4s",
      pos: [0, 6, -20],
    },
    {
      key: "TrHQK8fou1xQ7vM9ViATG",
      pos: [-1, 6, -20],
    },
    {
      key: "rMveHjQ6naYik8Saqo-xK",
      pos: [-2, 6, -20],
    },
    {
      key: "1h5yQGACvBhFya6dck-Qw",
      pos: [-3, 6, -20],
    },
    {
      key: "lDb83kMroUqDWIJlVWHcJ",
      pos: [-4, 6, -20],
    },
    {
      key: "QfsTKDqp9os9DNCbrz78_",
      pos: [-5, 6, -20],
    },
    {
      key: "nqx0JUU0uRyUzG0VAK0Rp",
      pos: [-6, 6, -20],
    },
    {
      key: "Jy3vfnkRSCB-YS_nWiMZP",
      pos: [-7, 6, -20],
    },
    {
      key: "RuKO3RbR3oF0upolbzFUu",
      pos: [-8, 6, -20],
    },
    {
      key: "ljwB0aECFhrpPtZ8PaLGK",
      pos: [-9, 6, -20],
    },
    {
      key: "W92BSHLqTMI5ZXhHIoBMS",
      pos: [-10, 6, -20],
    },
    {
      key: "JmWLWbnDUg_aDnDGFb5jq",
      pos: [-10, 6, -21],
    },
    {
      key: "TBls7UKmxIMrdq1trQPi9",
      pos: [-10, 6, -22],
    },
    {
      key: "2zAdivfCkA4ptXJC3VZhr",
      pos: [-10, 6, -23],
    },
    {
      key: "yKB1a5BgReF57xhj3c4zQ",
      pos: [-10, 6, -24],
    },
    {
      key: "qRBS_Ffm1_aXQlayVPjHM",
      pos: [-10, 6, -25],
    },
    {
      key: "1W2O3jYllCDmIsGyNLhmB",
      pos: [-10, 6, -26],
    },
    {
      key: "x5_nOCwLthLwqG_zsJIXr",
      pos: [-10, 6, -27],
    },
    {
      key: "UY7FdiNyKs29LUaPsZUqC",
      pos: [-10, 6, -28],
    },
    {
      key: "qt0WwqCyNTJGiLBQlOAeY",
      pos: [-10, 6, -29],
    },
    {
      key: "pDR9ZbVVPj0HEM8SGjURX",
      pos: [-10, 6, -30],
    },
    {
      key: "ib9aqxuOombICvgEpvZG_",
      pos: [-10, 6, -31],
    },
    {
      key: "snmedy21cY41CYEJTwhod",
      pos: [-10, 6, -32],
    },
    {
      key: "XlRkdxvrT_ikaBL3zT4oO",
      pos: [-10, 6, -33],
    },
    {
      key: "A7z-SOS2rjazXoxFwTbPl",
      pos: [-10, 6, -34],
    },
    {
      key: "sGWcPB1Lz7b8wmBK73EBd",
      pos: [-10, 6, -35],
    },
    {
      key: "s93sVZesT_De9XCWTRon-",
      pos: [-10, 6, -36],
    },
    {
      key: "zjCUZF86sbhsVw1Ds-rVO",
      pos: [-10, 6, -37],
    },
    {
      key: "Pv5EMAoyFWzRjkpYNNGZo",
      pos: [-10, 6, -38],
    },
    {
      key: "mNTr16S3bie1jOOYk85m8",
      pos: [-9, 6, -38],
    },
    {
      key: "_P_yCqqLxA_EFKA0bZnL9",
      pos: [-8, 6, -38],
    },
    {
      key: "OsXuorhvByOmINd5G9Cpn",
      pos: [-7, 6, -38],
    },
    {
      key: "yTPGZ4DBkMmUAGrVXBKkQ",
      pos: [-6, 6, -38],
    },
    {
      key: "voHrw_DzOO8MrW1p9-DRt",
      pos: [-5, 6, -38],
    },
    {
      key: "UlnQsRkiDg4Z5Rsh5hahD",
      pos: [-4, 6, -38],
    },
    {
      key: "1HqjtCSdQnqZxoh51I41O",
      pos: [-3, 6, -38],
    },
    {
      key: "lfYliUmeUyI-VLK4gHSQ1",
      pos: [-2, 6, -38],
    },
    {
      key: "UNSihebuI3UxDcwnrAMMh",
      pos: [-1, 6, -38],
    },
    {
      key: "qsJuqxe4clYjRexvUxjXV",
      pos: [0, 6, -38],
    },
    {
      key: "RNAcR0JrP-bkVluP52_je",
      pos: [1, 6, -38],
    },
    {
      key: "-7OAQWpPuy1moLfDMv8BP",
      pos: [2, 6, -38],
    },
    {
      key: "eqTYgRdY0N_a2GYNf4YUJ",
      pos: [3, 6, -38],
    },
    {
      key: "9dz83bUuwWHbZ9XW_SI6I",
      pos: [4, 6, -38],
    },
    {
      key: "v1SWSHBqAa2yf8a-p444U",
      pos: [5, 6, -38],
    },
    {
      key: "JDzdELbPfk-2sFt9sH8LQ",
      pos: [6, 6, -38],
    },
    {
      key: "O58TA7uXMxqMlxW1i-ZZO",
      pos: [7, 6, -38],
    },
    {
      key: "IWvk8xjURe5P73O6MWwej",
      pos: [8, 6, -38],
    },
    {
      key: "NVzsQCuRXouQvh21eCEy6",
      pos: [8, 5, -38],
    },
    {
      key: "KoXyTS86Bvewl4SR0Ftry",
      pos: [9, 6, -38],
    },
    {
      key: "KCPn09uTcwFSB9mSOlIOu",
      pos: [10, 6, -38],
    },
    {
      key: "Ow218A--kDzPGonyWWZsF",
      pos: [10, 6, -37],
    },
    {
      key: "kAVIGXUNYwaB35uUcoWQ4",
      pos: [10, 6, -36],
    },
    {
      key: "pHl7bWhLKGY9q9El4H7v1",
      pos: [10, 6, -35],
    },
    {
      key: "8k5gHYbQ_G9U2fs6T2RFq",
      pos: [10, 6, -34],
    },
    {
      key: "xcz5e_uYK6vFbjbGT5TZp",
      pos: [10, 6, -33],
    },
    {
      key: "tWoqRgbkAcw7bJCu9zLaP",
      pos: [10, 6, -32],
    },
    {
      key: "pVNlG7j_U5aw2No1sri9J",
      pos: [10, 6, -31],
    },
    {
      key: "dT5sfdcxCPyg_EUpYtZRP",
      pos: [10, 6, -30],
    },
    {
      key: "Hct_G31eb2bpjfyzeN29c",
      pos: [10, 6, -29],
    },
    {
      key: "bKwgGZPluQAbKvGCPaZLk",
      pos: [10, 6, -28],
    },
    {
      key: "6LHPlmEjkTGgBhefIFJn4",
      pos: [10, 6, -27],
    },
    {
      key: "D_-u5C1Wq0h2KV6JyUd1B",
      pos: [10, 6, -26],
    },
    {
      key: "syrgxUM8jZegGef9MJfhj",
      pos: [10, 6, -25],
    },
    {
      key: "v2F9TFcAgJd5kJ6ZWtTx9",
      pos: [10, 6, -24],
    },
    {
      key: "J7kmmc-W1sI4BryKLqAEq",
      pos: [10, 6, -23],
    },
    {
      key: "bedUpP7I0lK1FL9HAm5HB",
      pos: [10, 6, -22],
    },
    {
      key: "HcoGQJyyLaYFbkPe-KHJP",
      pos: [10, 6, -21],
    },
    {
      key: "C0qHr5SafEYTNx9QT2NT5",
      pos: [9, 6, -27],
    },
    {
      key: "w1DqDrkcL-0RuKM7-olYI",
      pos: [9, 5, -27],
    },
    {
      key: "d9J8R7aCMuXSu_eb15TOj",
      pos: [9, 4, -27],
    },
    {
      key: "OVppX81Fy00RzgZ8iRwVY",
      pos: [9, 3, -27],
    },
    {
      key: "3tB_plI42kvnOK4eAF8Hp",
      pos: [9, 2, -27],
    },
    {
      key: "XtcQyvcLtDg9N-jEv5zP6",
      pos: [8, 6, -27],
    },
    {
      key: "HOSpHkOh3CXHvPTRGp9b9",
      pos: [8, 5, -27],
    },
    {
      key: "SsFX2DDql0Ko7J17CFCSa",
      pos: [8, 4, -27],
    },
    {
      key: "DDdMsvZOIiOKd1h6okxtU",
      pos: [8, 3, -27],
    },
    {
      key: "0wpw7gtbhTTKl_TdMg8xZ",
      pos: [8, 2, -27],
    },
    {
      key: "UCUlNmO4p1QCMPeQWqWlh",
      pos: [7, 6, -27],
    },
    {
      key: "1GjQlgPdac3gWsld4ngHX",
      pos: [7, 5, -27],
    },
    {
      key: "omfmfs7Ub_C5QQAc2eayM",
      pos: [7, 4, -27],
    },
    {
      key: "fWWWKlHnKhjFu_dtW6sLh",
      pos: [7, 3, -27],
    },
    {
      key: "KVW9WNwDZx7aOWizniDYZ",
      pos: [7, 2, -27],
    },
    {
      key: "y6JC3hOtQT1R6wK4zIAcA",
      pos: [6, 6, -27],
    },
    {
      key: "Rcx82b4TLC4KE2SC1Uvg4",
      pos: [6, 5, -27],
    },
    {
      key: "zKsDgnCXfuaC2kGv6VJno",
      pos: [6, 4, -27],
    },
    {
      key: "FTJ9lpTUBKATe84YtEjlj",
      pos: [6, 3, -27],
    },
    {
      key: "r6bLWsGlL2L_KdX0Y2CFI",
      pos: [6, 2, -27],
    },
    {
      key: "gQRVvXGRjJ1OenNwFPPqn",
      pos: [7, 2, -25],
    },
    {
      key: "aD4IjWuoaHjBjmp0upFLD",
      pos: [7, 2, -24],
    },
    {
      key: "uctsXmMqDFdk6xPFhu0ij",
      pos: [7, 2, -23],
    },
    {
      key: "Yo10cuR4nP8C2XuZrpmdQ",
      pos: [7, 2, -22],
    },
    {
      key: "yNzEgBCdQhV97mJ4GSBRn",
      pos: [-9, 2, -27],
    },
    {
      key: "tXR04Iq6GsX9n1x9NuGGJ",
      pos: [-8, 2, -27],
    },
    {
      key: "Y8wpYMV6TSKbQxgNths9z",
      pos: [-7, 2, -27],
    },
    {
      key: "SNIix0epdrDEYyyQ851Th",
      pos: [-6, 2, -27],
    },
    {
      key: "KH5Z9rQZB-Y9ID_fFYyvl",
      pos: [-9, 3, -27],
    },
    {
      key: "5FEdD447x0dU1rrEUjAMm",
      pos: [-8, 3, -27],
    },
    {
      key: "k4rKgcCY5jlbRzu8gPV1Z",
      pos: [-7, 3, -27],
    },
    {
      key: "GcsRa2C3YbnW64wBT_VTl",
      pos: [-6, 3, -27],
    },
    {
      key: "Oca_RZTvMxm-0oijrPoHf",
      pos: [-9, 4, -27],
    },
    {
      key: "ervBz5TanXv5e7S1wJMVR",
      pos: [-8, 4, -27],
    },
    {
      key: "7pX-M-3Kn-EkOnOYFMzLz",
      pos: [-7, 4, -27],
    },
    {
      key: "6G9rvRBypVHuqJJxF-0vS",
      pos: [-6, 4, -27],
    },
    {
      key: "RPFk5fEoedeucCZmwZ1wq",
      pos: [-9, 5, -27],
    },
    {
      key: "tZAFBxggOid9NUSZLSeQC",
      pos: [-8, 5, -27],
    },
    {
      key: "mD7oxbRn--wE0mwXof4Tu",
      pos: [-7, 5, -27],
    },
    {
      key: "uZCsM-fd-HOZVumDpZNpX",
      pos: [-6, 5, -27],
    },
    {
      key: "tZS7oZjzWQAPPtP-o2DFo",
      pos: [-9, 6, -27],
    },
    {
      key: "fR2ZFjNbxckkO97IaOSlf",
      pos: [-8, 6, -27],
    },
    {
      key: "dhabPZvFcRLdTzrItrvPk",
      pos: [-7, 6, -27],
    },
    {
      key: "2GybR9wg_jqC5OjlKnJiC",
      pos: [-6, 6, -27],
    },
    {
      key: "t810cBvlc_tZoRo5Ek5t6",
      pos: [-7, 2, -25],
    },
    {
      key: "0aofgPcQHdwxoSuil9y-o",
      pos: [-7, 2, -24],
    },
    {
      key: "MQTX63RPcH6Rvu8sd-TxM",
      pos: [-7, 2, -23],
    },
    {
      key: "z6Avjovq4yFYX_KdF2IKR",
      pos: [-7, 2, -22],
    },
    {
      key: "6-pBDa2HcjQhxZnv_Mw4F",
      pos: [15, 1, -21],
    },
  ],

  setUserOnHome: (state) => set({ userOnHome: state }),
  setTextureState: (state) => set({ textureState: state }),
  toggleProductsCatalog: (state) => ({ productsCatalog: state }),

  addCubes: (x, y, z) => {
    set((prev) => ({
      placedCubes: [
        ...prev.placedCubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },

  removeCube: (x, y, z) => {
    set((prev) => ({
      placedCubes: prev.placedCubes.filter((cube) => {
        const [X, Y, Z] = cube.pos;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },

  saveWorld: () => {
    set((prev) => {
      setLocalStorage("cubes2", prev.cubes);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
});

const useStore = create(store);

export default useStore;
