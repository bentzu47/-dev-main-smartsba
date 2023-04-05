// <%@ page info="SCCS id: $Id$" %>
// <%@ page import="java.io.InputStream" %>
// <%@ page import="java.net.URL" %>
// <%@ page import="java.io.FileNotFoundException" %>
// <%@ page import="org.json.simple.JSONObject" %>

// <%@ page import="com.fs.bean.util.GlobalVariable" %>
// <%@ page contentType="charset=UTF-8"%>
// <%@page trimDirectiveWhitespaces="true" %>

// <jsp:useBean id="fsAccessor" scope="session" class="com.fs.bean.util.AccessorBean"/>
// <%
//     String usrname = request.getParameter("fsUser")==null||"".equals(request.getParameter("fsUser"))?fsAccessor.getFsVar("fsUser"):request.getParameter("fsUser");
//     String imgBasePath = (String)GlobalVariable.getVariable("REF_HOST")+(String)GlobalVariable.getVariable("IMAGE_PROFILE_PATH");
//     String fileName = fsAccessor.getFsVar("fsImage")==null||"".equals(fsAccessor.getFsVar("fsImage"))?usrname:fsAccessor.getFsVar("fsImage");
//     String imgPath = new String(imgBasePath+"?key="+fsAccessor.getFsVar("fsKey")+"&m="+fileName);
//     JSONObject list = new JSONObject();
//     try {
//         InputStream is = new URL(imgPath).openStream();
//         list.put("fileNotFound", false);
//         list.put("status", 200);
//         list.put("text",imgPath);
//         out.print(list);
//         if(is!=null) is.close();
//     }catch(FileNotFoundException ex){
//         String fname = request.getParameter("fsUserName")==null||"".equals(request.getParameter("fsUserName"))?fsAccessor.getFsVar("fsUserName"):request.getParameter("fsUserName");
//         fname = fname.replaceAll("\\s+", "_").toUpperCase();
//         String[] name = fname.split("_");
//         String str;
//         if(name.length>1){
//             str = String.valueOf(name[0].charAt(0)) + String.valueOf(name[1].charAt(0));
//         }else{
//             str = String.valueOf(name[0].charAt(0));
//         }
//         list.put("fileNotFound", true);
//         list.put("status", 404);
//         list.put("text",str);
//         out.print(list);
//     }
// %>