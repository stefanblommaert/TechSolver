<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Submit login</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <h1>TechSolver Webapplication</h1>
    </div>
        <div id="login">
            <div>
                Username: <asp:TextBox ID="username" ValidationGroup="AllValidators" runat="server"></asp:TextBox>
            </div>
            
            <div>
                Password: <asp:TextBox ID="password" ValidationGroup="Allvalidators" runat="server"></asp:TextBox>
                <br />
                <asp:Button ID="Login"  runat="server" Text="Login" />
                <br />
                <br />
                <asp:Button ID="Register" runat="server" Text="Register" OnClick="Register_Click" />
            </div>
                
            <div>

            </div>
        </div>
    </form>
</body>
</html>
