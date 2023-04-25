import React from 'react'

function DangNhap() {
    return <div className="background-color">
        <div className="logoAlta" />
        <div className="group-341" />
        <div className="textErr">Quên mật khẩu?</div>
        <div className="title">Hệ thống</div>
        <div className="titledown">Quản lý xếp hàng</div>
        <div className="login">
            <form>
                <div className="form-group">
                    <label htmlFor="login">Tên đăng nhập *</label>
                </div>
                <div className="form-group">
                    <input type="text" className="nameboxlogin " id="nameboxlogin" name="nameboxlogin" placeholder="Tài khoản..." />
                </div>
                <div className="form-group">
                    <label htmlFor="nameboxlogin">Mật khẩu *</label>
                </div>
                <div className="form-group">
                    <input type="text" className="passboxlogin " id="passboxlogin" name="passboxlogin" placeholder="Mật khẩu..." />
                </div>
            </form>
        </div>
        <button className="button">Đăng nhập</button>
    </div>


}

export default DangNhap
