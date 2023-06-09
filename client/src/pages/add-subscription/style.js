import Styled from "styled-components";

const Aside = Styled.aside`
  width: 100%;
  height: 100vh;
  position: relative;

  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left top;
  @media only screen and (max-width: 767px){
    height: 100%;
  }
  .topShape {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
  }
  .bottomShape {
    position: absolute;
    bottom: 0;
    left: 0;
    //width: 400px;
  }
  .auth-side-content{
    @media only screen and (max-width: 991px){
      h1{
        font-size: 20px;
      }
    }
    @media only screen and (max-width: 767px){
      h1{
        font-size: 24px;
        margin-bottom: 28px;
      }
    }
  }
`;

const Content = Styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    height:100vh;
    @media only screen and (max-width: 1599px){
      padding: 50px;
    }
    @media only screen and (max-width: 991px){
      padding: 20px;
    }
    @media only screen and (max-width: 767px){
      text-align: center;
    }
    .auth-content-figure{
      @media only screen and (max-width: 1199px){
        max-width: 420px;
      }
      @media only screen and (max-width: 991px){
        max-width: 100%;
      }
    }
`;

const AuthWrapper = Styled.div`
.subscription-plan-logout-btn {
  background: transparent;
  color: #5F63F2;
  border: 1px solid #5F63F2;
  margin-top: 22px !important;
  text-align: center;
  text-align: center;
  margin-left: 90% !important;
  width: 90px;
  margin: auto;
  margin-bottom: -3px;
  svg {
  font-size: 38px;
  width: auto;
  height: auto;
  margin-left: 3px;
  }
  &:hover{
    background: #5F63F2;
    color:#fff;
  }
}
.subscription-plan-wrapper {
    margin-left: 30px;
    margin-top: 80px;
    width:100% ;
    .subscription-plan-tile-wrapper {
    margin-top: 40px;
    .subscription-plan-item-wrapper {
    border: 2px solid #E3E6EF;
    padding: 24px 20px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition:0.3s all ease-in ;
    &:hover{
    border: 2px solid #5f63f2;
    cursor:pointer;
    transition:0.3s all ease-in ;
    .ant-btn{
      background: #5F63F2;
      color:#fff;
      transition:0.3s all ease-in ;
    }
    }
    .subscription-item-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative ;
    .new-deal-label {
      position: absolute;
    top: -31px;
    right: -39px;
    background: #34C38F;
    transform: rotate(45deg);
    padding: 0 24px;
    color: #fff;
    font-size: 8px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
}
      h3 {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    padding: 8px 16px;
    text-align: center;
    background: #5f63f21f;
    mix-blend-mode: normal;
    border-radius: 16px;
    color: #5F63F2;
    position: relative;
    top: -2px;

}
p {
  margin-top:24px !important;
  span.doller-sign {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: #ADB4D2;
    margin-right: 1px;
    margin-top: 9px;
}

.price-text {
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    color: #272B41;
}
.month-text {
    align-self: end;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    position: relative;
    top: -7px;
    color: #ADB4D2;
}
}
    }
    .plans-list-wrapper{
margin-top:6px;
max-width:192px;
     li {
    margin-top: 18px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #4B5664;
    margin-left: -2px;
    svg.text-overlow-wrapper {
    font-size: 22px;
    position: relative;
    top: -8px;
}
    svg {
    color: #20C997;
    margin-right: 12px;
}
} 
}
.subscription-plan-btn {
    background: transparent;
    color: #5F63F2;
    border: 1px solid #5F63F2;
    margin-top: 22px !important;
    text-align: center;
    text-align: center;
    width: 169px;
    margin: auto;
    margin-bottom: -3px;
    svg {
    font-size: 38px;
    width: auto;
    height: auto;
    margin-left: 3px;
    }
    &:hover{
      background: #5F63F2;
      color:#fff;
    }
}
}
}
    .subscription-plan-header{
      h1{
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    text-align: left;
    color: #272B41;
}
p{
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #4B5664;
    margin-top:12px !important;
}
    }
  
}
.selected-plan-header-text {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #272B41;
}
.selected-plan-wrapper {
    border: 1px solid #5F63F2;
    width: 644px;
    border-radius: 10px;
    padding: 8px 16px;
    justify-content:space-between;
    h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #272B41;
}

.selected-plan-text{
  p {
    
    span:nth-child(1) {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #5F63F2;
    display: block;
    margin-top: 11px;
}
    span:nth-child(2) {
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: #5F63F2;
}
    span:nth-child(3) {
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: right;
    color: #000;
    align-self: center;
    margin-top: 11px;

}
  }
} 
}
.strip-form-wrapper {
    margin-top: 80px;
    margin-left: 30px;
    .form-header{
      h1{
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0px;
        text-align: left;
        color:#272B41;

      }
      p{
        font-size: 14px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: left;
        color:#5A5F7D;
        margin-top:12px !important;

      }
    }
    .stripform-form-address.new-feild-wrapper{

     .stripform-item-wrapper {
    margin-top: 20px !important;
}
    }
    .stripform-form-credit-card{
      margin-top:24px;
      max-width:644px;
      h2 {
      font-size: 16px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      color: #272B41;
      }
      .strip-form-date-expire{
          margin-top:24px;
          margin-bottom:24px;
        }
      .stripform-item-wrapper{
        margin-top:4px;
          .city-dropdown-wrapper {
              width: 307px;
              .ant-select-selector {
              padding: 0 16px;
          }
          .ant-select-arrow {
              top: 55%;
              right: 10px;
              width: 8px;
              height: 4px;
              margin-top: -7px;
              color: rgb(100 104 132);
              font-size: 12px !important;
              margin-right: 10px;
          }
          }
          input{
            width:307px;
            padding: 0 16px;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: left;
            color: #5A5F7D;
          }
      .state-dropdown-wrapper {
              width: 138px;
              .ant-select-selector {
              padding: 0 16px;
          }
          .ant-select-arrow {
              top: 55%;
              right: 10px;
              width: 8px;
              height: 4px;
              margin-top: -7px;
              color: rgb(100 104 132);
              font-size: 12px !important;
              margin-right: 10px;
          }
          }
        grid-gap:30px;
        .strip-form-item{
          .zipcode-input-wrapper
          {
            width: 139px;

          }
          .payment-form-address {
            width: 644px !important;
            padding: 6px;
          }
          .payment-user-name {
            padding: 6px;
          }
          .credit-card-input-wrapper {
          position: relative;
          input{
            padding-left: 42px;
            font-size: 14px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0px;
            text-align: left;
          }
          svg {
              position: absolute;
              left: 16px;
              top: 10px;
              color:#5F63F2 ;
              font-size:16px;
          }
      }
         label {
          font-size: 14px;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: left;
          color: #757575;
          margin-bottom:4px;
        }

}
  }
}
.stripform-form-address{
  .strip-address-wrapper{
    max-width: 644px;
          margin-top:24px;
          label{
            margin-bottom: 6px !important;
            line-height: 16px !important;
          }
        }
}
.fotter-wrapper{
    grid-gap: 16px;
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    max-width:644px ;
.cancel-btn {
    background: transparent;
    border: 1px solid #E3E6EF;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #9299B8;
    &:hover{
      border:1px solid #5F63F2;\
      color:#5F63F2;
    }
}
.cancel-link-btn {
  background: transparent;
  border: 1px solid #E3E6EF;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #9299B8;
}
.save-btn {
    background: transparent;
    border: 1px solid #5F63F2;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #5F63F2;
    &:hover{
      background: #5F63F2;
      color:#fff;
    }
}
}

.card-images {
    position: absolute;
    top: 33px;
    right: 14px;
    display: flex;
    align-items: center;
    grid-gap: 3px;
    img {
    width: 23.5px;
}
}
div#login_Number {
    width: 307px;
    border: 1px solid #E6E6E6;
    padding: 9px 120px 9px 16px;
    border-radius: 4px;
}
div#login_expirationDate {
    width: 307px;
    border: 1px solid #E6E6E6;
    padding: 9px 16px;
    border-radius: 4px;
}
div#login_cvc {
  width: 307px;
  border: 1px solid #E6E6E6;
  padding: 9px 16px;
  border-radius: 4px;
}
}

.CardNumberField-input-wrapper input {
  font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: blue !important;
}
span.InputContainer input {
    color: red;
}
.email-verfication-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 200px;
    align-items: center;
    text-align: center;
    h1{
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    letter-spacing: 0px;
    }
    img {
    padding: 60px 0px;
}

p{
  i{
font-size: 14px;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: right;
color:#5A5F7D ;

  }
  .email-verification-btn {
  padding: 0px;
  background: transparent;
  font-size: 14px;
  font-style: italic;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color:#5F63F2;
  &:hover{
    color: #5F63F2 !important;
  }
}
}

}
.d-flex.align-items-center.stripform-item-wrapper input::placeholder {
    color: #ADB4D2;
}
.main-wrapper {
  height: 100vh;
  background: #fbe9f4;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  img {
    padding-left: 0px;
    padding-top: 52px;
}
}
a.link-resend {
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
}
span.ant-rate-text span {
  color: #5F63F2;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  text-align: left;
  margin-left: 2px;
}
.br-style{
  display:none;
}
.confirm-email-div-content {
  margin-top: 151px !important;
  max-width: 340px;
  margin: 0 auto;
  position: relative;
    left: 16px;
  h3 {
    padding-top: 29px;
    line-height: 14.05px;
    font-size: 24px;
    font-weight: 700;
  }
  p {
    padding-top: 8px;
    line-height: 19px;
    font-size:14px;
    color:#5A5F7D ;
  }
  span {
    margin-top: 45px;
    display: block;
}
.link-sign-in {
  padding-left: 8px;
}
}
.confirm-email-image{
  text-align:center;
}
.confirm-receive-email{
  font-weight:500;
  font-style:italic;
  a{
    color: #5F63F2;
  }
  & + span{
    margin-top:24px;
    text-align:center;
    font-weight:500;
    a{
      font-weight:700;
      font-style:italic;
      color: #5F63F2;
    }
  }
}
.main-wrapper::after {
  border-top-right-radius: 100%;
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 178px;
  height: 101px;
  background: #ede8fb;
}
.auth-form-action {
    margin-bottom: 0px !important;
}
.color-secondary.logo-text {
    font-weight: 500;
    vertical-align:middle;
    position: relative;
    top: 1px;
}
.content-area {
  padding-top: 80px;
  padding-left: 7px;
  max-width: 466px;
  font-weight:600;
  h4 {
    color: #5F63F2;
    font-size: 24px;
    line-height: 32.74px;
    letter-spacing: 1px;
    font-weight:800;
    margin-bottom:0;
    span {
      color: #5F63F2;
      font-size: 24px;
      line-height: 32.74px;
    }

  }

  h2 {
    font-size: 28px;
    font-weight: 700;
    /* line-height: 35.89px; */
    line-height:36px;
    margin-bottom: 0px;
    /* padding-top: 15px; */
    padding-top:9px;
  }
  .Logo {
    font-size: 24px;
    line-height: 32.74px;
    letter-spacing: -1px;
    color: #5f63f3;
    font-weight:500;
}
}
.user-wrapper {
    font-size: 20px !important;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #5A5F7D;
}
.user-titile-id {
    font-size: 20px !important;
    font-weight: 700 !important;
    line-height: 20px !important;
    letter-spacing: 0px;
    text-align: left;
    color: #5F63F2;
}

  height: 100%;
  @media only screen and (max-width: 1599px){
    padding: 0px;
  }
  
  @media only screen and (max-width: 767px){
    text-align: center;
  }
  .auth-notice{
    align-items: baseline;   
     max-width: 312px;
    justify-content: center;
    text-align: right;
    font-weight: 500;
    color: ${({ theme }) => theme["gray-color"]};
    font-size:14px;
    line-height:17px;
    font-style: italic;
    span{
      color:#5F63F2;
      font-weight:700;
      cursor: pointer;
    }
    @media only screen and (max-width: 767px){
      text-align: center;
      margin-bottom: 10px;
    }
  }
  button{
    &.btn-signin{
      min-width: 100%;
    }
    &.btn-create{
      border-radius: 8px;
      min-width: 205px;
    }
    &.btn-reset{
      border-radius: 8px;
      min-width: 260px;
    }
    &.ant-btn-lg{
      font-size: 14px;
      font-weight: 500;
      min-height:36px;
    }
  
  }
  .ant-input {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    display: inline-block;
    padding: 12px 13px;
    color: #ADB4D2;
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #E3E6EF;
    border-radius: 4px;
    transition: all 0.3s;
}
.ant-input-password .ant-input-suffix{
    width: 19px;
    margin-top: -2px;
}
.ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #272B41;
    font-size: 14px;
    line-height: 1.5715;
    list-style: none;
    margin-bottom: 16px;
    vertical-align: top;
}
  .auth-contents{
    display: flex;
    align-items: center;
    justify-content: center;
    height:100vh;
    form{
      width: 307px;
      margin: 0 auto;
      h1{
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 32px;
        line-height: 29.05px;
        span{
          color:#5F63F2;
          font-weight:800;
        }
        
        @media only screen and (max-width: 767px){
          margin-bottom: 28px;
        }
        input::placeholder{
          color: #5F63F2;
        }
      }
      .auth-form-action{
        margin-bottom: 24px;
        display: flex;
        justify-content: space-between;
        max-width: 311px;
        & + .ant-form-item{
          margin-bottom:22px;
        }
        .ant-checkbox-wrapper{
          line-height:14.52px;
          display: ;
        }
        .forgot-text{
          font-size: 12px;
          font-weight: 500;
          line-height: 14.52px;
          color: #5F63F2;
        }
        .check-box-text{
          color:#9299B8;
          font-weight: 500;
          line-height: 14.52px;
          font-size:12px;
          padding-left:4px;
          position:relative ;
          top:4px;

        }
        .forgot-pass-link{
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
        }
        @media only screen and (max-width: 379px){
          flex-flow: column;
          .forgot-pass-link{
            margin-top: 15px;
            line-height:14.52px;
          }
        }
      }
    }
    .ant-col.ant-form-item-label{
      line-height: 16.94px;
      label {
        font-size: 14px;
        font-weight: 500;
        line-height: 16.94px;
        color: #757575;
    } 
  }
    #forgotPass{
      .forgot-text{
        margin-bottom: 25px;
      }
      .return-text{
        margin-top: 35px;
      }
    }
    .ant-form-item-control-input-content{
      
      a {
        color: #5F63F2;
        margin-left: 8px;
    }

    }
    .ant-form-item-control-input{
      min-height:42px;
    }
    .ant-input-auth {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum','tnum';
    position: relative;
    display: inline-block;
    padding: 12px 13px;
    color: #ADB4D2;
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #E3E6EF;
    border-radius: 4px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
    .form-divider{
      font-size: 13px;
      color: ${({ theme }) => theme["gray-solid"]};
      text-align: center;
      position: relative;
      margin-bottom: 25px;
      &:before{
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        height: 1px;
        background: ${({ theme }) => theme["border-color-light"]};
      }
      span{
        background: #fff;
        padding: 0 15px;
        display: inline-block;
        position: relative;
        z-index: 2;
      }
    }
    .social-login{
      display: flex;
      align-items: center;
      margin: -6px;
      @media only screen and (max-width: 767px){
        justify-content: center;
      }
      &.signin-social{
        li{
          a{
            box-shadow: 0 5px 15px ${({ theme }) => theme["light-color"]}10;
            background-color: #fff;
          }
        }
      }
      li{
        padding:6px;
        a{
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          height: 48px;
          padding: 0 15px;
          border: 1px solid ${({ theme }) => theme["border-color-light"]};
          background: ${({ theme }) => theme["bg-color-light"]};
          color: ${({ theme }) => theme["text-color"]};
          font-weight: 500;
          @media only screen and (max-width: 379px){
            height: 44px;
            padding: 0 12px;
          }
          span:not(.anticon){
            display: inline-block;
            margin-left: 5px;
          }
          svg,
          i{
            width: 20px;
            height: 20px;
          }
          &.google-signup,
          &.google-signin{
            display: flex;
            align-items: center;
            padding: 0 30px;
            @media only screen and (max-width: 379px){
              padding: 0 5px;
            }
            img{
              margin-right: 8px;
              @media only screen and (max-width: 379px){
                margin-right: 4px;
              }
            }
          }
          &.facebook-sign{
            color: #475993;
          }
          &.twitter-sign{
            color: #03A9F4;
          }
        }
      }
    }
  }
  .ant-checkbox-inner {
    width:19px;
    height:21px;
  }
  .forget-form{
    .heading-forget{
      margin-bottom:12px;
    }
    .label-heading{
      /* padding-top: 40px; */
      padding-top: 32px;
      margin-bottom:0;
    }
    button{

      min-height:4px;
    }
    .forgot-btn{
      margin-bottom:10px;
    }
  }
  .reset-password{
p{
    line-height: 20px;
    margin-bottom: 32px;
    color: #5A5F7D;
}
form h1{
    margin-bottom:16px;
  }
  span{
    font-size: 14px;
    font-weight: 500;
    line-height: 16.52px;
   &.return-link{
    font-style:italic;
    margin-left: -4px;
    a{
      color: #5F63F2;
      font-weight:700;
      margin-left: 3px;
    }
   }
  }

}
button.ant-btn-lg {
  font-size: 14px;
  font-weight: 500;
  margin-top: 48px;
  height:36px !important;
}
button.btn-resetpassword{
      margin-top:32px;
      margin-bottom:8px;
    }
  .ant-input-affix-wrapper > input.ant-input {
    padding-left: 0px;
}
.verfiction-email-overlay-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 60px;
    margin-top: 200px;
    h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #272B41;
}
    p {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: right;
    color: #5A5F7D;
    margin-bottom: 0px;
    a {
    font-style: italic;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #5F63F2;
}
}
}

`;
const OnBoardingWrapper = Styled.div`
  .main-onboading-wrapper {
    margin-left: 30px;
    margin-right: 12px;
    height: calc(100vh - 7px);
    overflow: auto;
  }
  .Onboarding-header {
    margin-top: 40px;
    span.overview-text-wrapper {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0px;
      text-align: left;
      color: #272b41;
      .logo-chat {
        font-size: 24px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: 0px;
        text-align: left;
        color: #5f63f2;
        svg{
          position:relative;
          top:6px;
        }
      }
      .logo-pro {
        font-size: 24px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0px;
        text-align: left;
        color: #5f63f2;
      }
    }
    .text-paragraph {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 0px;
      color: #5a5f7d;
      margin-top: 12px;
    }
  }
  .video-section-wrapper {
    display: flex;
    justify-content: center;
    .video-wrapper {
      border: 8px solid #fff;
      margin-top: 30px;
      box-shadow: 0px 4px 4px rgb(0 0 0 / 25%), 5px 5px 20px rgb(0 0 0 / 15%);
      width: 100%;
      max-width: 532px;
      height: 248px;
      margin-left: 8px;
    }
  }
  .next-link-btn {
    border: 1px solid #5f63f2;
    position: relative;
    letter-spacing: 0em;
    padding: 0 17px;
    &:hover {
      background-color: #5f63f2;
    }
    &:hover span {
      color: #fff;
    }
    span {
      color: #5f63f2;
    }
  }
  .features-wrapper {
    margin-top: 36px;
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }
    ul {
      margin-top: 15px;
      margin-left: 21px;
      li {
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #5a5f7d;
        list-style: disc;
        margin-top: 8px;
      }
    }
  }
  .d-flex.justify-content-end.footer-wrapper {
    margin-top: 30px;
    grid-gap: 16px;
    .cancel-btn {
      color: #9299b8;
      border-color: #9299b8;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      padding: 0 17px;

      &:hover {
        color: #5f63f2;
        border-color: #5f63f2;
      }
    }
    .install-extention {
      color: #5f63f2;
      border-color: #5f63f2;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      padding: 0 17px;
      &:hover {
        color: #fff;
        border-color: #5f63f2;
        background-color: #5f63f2;
      }
    }
  }
  .second-step-wrapper {
    margin-left: 30px;
    margin-right: 10px;
    margin-top: 80px;
    overflow: auto;
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0px;
      text-align: left;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0px;
      text-align: left;
      color: #5a5f7d;
      margin-top: 12px !important;
    }
  }
  .socail-contection-wrapper {
    border: 1px solid #5F63F2;
    padding: 23px;
    margin-top: 40px;
    border-radius: 4px;
    img {
      width: 30px;
    }
    span {
      margin-left: 8px;
      color: #1877f2;
    }
    button {
      border: 1px solid #5F63F2;
      color: #5F63F2;
      font-size: 14px;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      padding: 0 17px;

      &:hover span {
        color: #fff;
      }
      &:hover {
        background-color: #5F63F2;
        color: #fff;
      }
      span {
        margin-left: 0px;
        color:#5F63F2;
      }
    }
  }
  .profile-img-wrapper {
    border-radius: 40px;
  }
  .three-step-wrapper {
    margin-left: 30px;
    margin-top: 80px;
    margin-right: 24px;
    .three-step {
      img {
        width: 30px;
        margin-right: 16px;
      }
    }
    h2 {
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
      letter-spacing: 0px;
      text-align: left;
      color: #272b41;
      .logo-chat {
        font-size: 24px;
        font-weight: 500;
        line-height: 33px;
        letter-spacing: 0px;
        text-align: left;
        color: #5f63f2;
        position:relative;
        top:6px;
      }
      .logo-pro {
        font-size: 24px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0px;
        text-align: left;
        color: #5f63f2;
      }
    }
    .step-three-user-info {
      /* margin-top: 37px; */
      margin-top: 32px;
      margin-left: 9px;

      img {
        max-width: 100%;
      }
      h4 {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: #272b41;
        margin-bottom: 0px;
        margin-top: 13px;
      }
    }
    .step-three-order-list {
      /* margin-top: 44px; */
      margin-top: 40px;
    }
    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: #272b41;
      margin-bottom: 0px;
    }
    ul {
      margin-top: 12px;
      li {
        list-style: disc;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        margin-top: 8px;
        color: #5a5f7d;
        margin-left: 21px;
      }
    }
    .socail-account-wrapper {
      grid-gap: 16px;
      margin-top: 30px;
      .cancel-btn {
        border: 1px solid #e3e6ef;
        padding: 0 17px;
        &:hover {
          border: 1px solid #5f63f2;
        }
        &:hover span {
          color: #5f63f2;
        }

        span {
          color: #9299b8;
        }
      }
      .confirm-btn {
        border: 1px solid #5f63f2;
        padding: 0 17px;
        position: relative;
        line-height: 17px;
        left: 14px;
        top: 1px;
        &:hover {
          background-color: #5f63f2;
        }
        &:hover span {
          color: #fff;
        }
        span {
          color: #5f63f2;
        }
      }
      .confirm-link-btn {
        border: 1px solid #5f63f2;
        position: relative;
        letter-spacing: 0em;
        padding: 0 17px;
        &:hover {
          background-color: #5f63f2;
        }
        &:hover span {
          color: #fff;
        }
        span {
          color: #5f63f2;
        }
      }
    }
  }
  .terms-wrapper {
    grid-gap: 8px;
    margin-top: 16px;
    .ant-checkbox-wrapper {
      position: relative;
      top: -3px;
    }
    .link-wrapper{
      color:#5F63F2;
    }
  }
  .socail-account-wrapper {
    grid-gap: 1px !important;
  }

`;

export { Aside, Content, AuthWrapper, OnBoardingWrapper };
