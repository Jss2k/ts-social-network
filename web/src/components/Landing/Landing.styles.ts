import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;


.wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.left,
.right {
  width: 50%;
}

.left {
  background: #55abee;
  background-size: cover;
  display: flex;
}

.left .items-wrapper {
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left .items-wrapper .item {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 400px;
  width: 400px;
  margin: 0 auto 50px;
}

.left .items-wrapper .item .label {
  font-size: 20px;
  font-weight: bold;
}

.center {
  margin: 230px auto auto;
  text-align: center;
}

.center img {
  width: 50px;
}

.center .btn-sign-up {
  display: block;
  margin-bottom: 15px;
  background-color: #55abee;
  border: 1px solid #55abee;
  color: #fff;
  border-radius: 100px;
  padding: 6px 16px;
  text-align: center;
  margin-top: 15px;
}

.center .btn-login {
  display: block;
  width: auto;
  text-align: center;
}

.left .items-wrapper .icon {
  font-size: 25px;
  margin-right: 15px;
}

.btn-login {
  background-color: #fff;
  border: 1px solid #55abee;
  color: #1da1f2;
  border-radius: 100px;
  padding: 12px;
  font-size: 14px;
  width: auto;
  font-weight: bold;
}

.btn-login:hover {
  background-color: #eaf5fd;
  color: #1da1f2;
}
`