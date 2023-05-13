package com.embraer.backend.report.models;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

import com.embraer.backend.item.services.ListItemsByChassi.dto.ListApplicable;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListIncorporated;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListItemsResponseDTO;
import com.embraer.backend.item.services.ListItemsByChassi.dto.ListNotApplicable;
import com.embraer.backend.serviceBulletin.entity.ServiceBulletin;
import com.embraer.backend.serviceBulletin.service.listServiceBulletins.dto.ListServiceBulletinsResponse;
import com.embraer.backend.webConfig.UserSession;
import com.fasterxml.jackson.databind.ser.Serializers;
import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPRow;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;


public class PdfItems {

    public static ByteArrayInputStream exportReportItems (ListItemsResponseDTO items,
                                                          Long chassiId, String userName,
                                                          boolean inc, boolean app,
                                                          boolean notApp) throws IOException {

        //Criando o documento PDF
        Document document = new Document(PageSize.A4.rotate(), 25, 25, 25, 25);
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {

            //Criando a tabela para o relatório
            PdfPTable table = new PdfPTable(2);
            table.setWidthPercentage(100);
            table.setWidths(new int[] { 8, 4});

            //Criando o cabeçalho da tabela
            Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 24, BaseColor.WHITE);

            PdfPCell hcell;

            hcell = new PdfPCell(new Phrase("Item", headFont));
            hcell.setPaddingTop(9f);
            hcell.setFixedHeight(50f);
            hcell.setVerticalAlignment(Element.ALIGN_CENTER);
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(hcell);

            hcell = new PdfPCell(new Phrase("Status", headFont));
            hcell.setPaddingTop(9f);
            hcell.setFixedHeight(50f);
            hcell.setVerticalAlignment(Element.ALIGN_CENTER);
            hcell.setHorizontalAlignment(Element.ALIGN_CENTER);
            table.addCell(hcell);


            if (inc) {

                for (ListIncorporated item : items.getIncorporated()) {

                    //Povoando as células da tabela
                    Font font = FontFactory.getFont(FontFactory.HELVETICA, 21, new BaseColor(9, 22, 163));

                    PdfPCell cell;

                    cell = new PdfPCell(new Phrase(item.getName_item(), font));
                    cell.setPaddingTop(2f);
                    cell.setFixedHeight(32f);
                    cell.setVerticalAlignment(Element.ALIGN_CENTER);
                    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                    table.addCell(cell);

                    cell = new PdfPCell(new Phrase(item.getStatus(), font));
                    cell.setPaddingTop(2f);
                    cell.setFixedHeight(32f);
                    cell.setVerticalAlignment(Element.ALIGN_CENTER);
                    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                    table.addCell(cell);

                }
            }

            if (app) {

                for (ListApplicable item : items.getApplicable()) {

                    //Povoando as células da tabela
                    Font font = FontFactory.getFont(FontFactory.HELVETICA, 21, new BaseColor(9, 22, 163));

                    PdfPCell cell;

                    cell = new PdfPCell(new Phrase(item.getName_item(), font));
                    cell.setPaddingTop(2f);
                    cell.setFixedHeight(32f);
                    cell.setVerticalAlignment(Element.ALIGN_CENTER);
                    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                    table.addCell(cell);

                    cell = new PdfPCell(new Phrase(item.getStatus(), font));
                    cell.setPaddingTop(2f);
                    cell.setFixedHeight(32f);
                    cell.setVerticalAlignment(Element.ALIGN_CENTER);
                    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                    table.addCell(cell);

                }
            }

            if (notApp) {

                for (ListNotApplicable item : items.getNot_applicable()) {

                    //Povoando as células da tabela
                    Font font = FontFactory.getFont(FontFactory.HELVETICA, 21, new BaseColor(9, 22, 163));

                    PdfPCell cell;

                    cell = new PdfPCell(new Phrase(item.getName_item(), font));
                    cell.setPaddingTop(2f);
                    cell.setFixedHeight(32f);
                    cell.setVerticalAlignment(Element.ALIGN_CENTER);
                    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                    table.addCell(cell);

                    cell = new PdfPCell(new Phrase(item.getStatus(), font));
                    cell.setPaddingTop(2f);
                    cell.setFixedHeight(32f);
                    cell.setVerticalAlignment(Element.ALIGN_CENTER);
                    cell.setHorizontalAlignment(Element.ALIGN_CENTER);
                    table.addCell(cell);

                }
            }

            //Alternando a cor do background e do grid das células entre branco e cinza
            boolean b = true;
            for(PdfPRow r: table.getRows()) {
                for(PdfPCell c: r.getCells()) {
                    c.setBackgroundColor(b ? new BaseColor(224, 224, 225) : BaseColor.WHITE);
                    c.setBorderColor(b ? new BaseColor(224, 224, 225) : BaseColor.WHITE);
                }
                b = !b;
            }

            //Definindo a cor do background e do grid do cabeçalho
            for(PdfPCell c: table.getRow(0).getCells()) {
                c.setBackgroundColor(new BaseColor(9, 22, 163));
                c.setBorderColor(new BaseColor(9, 22, 163));
            }

            //Determinando a repetição do cabeçalho em todas as páginas geradas
            table.setHeaderRows(1);

            //Abrindo o documento PDF para ser editado
            PdfWriter.getInstance(document, out);
            document.open();

            //Adicionando imagem
            Image img = Image.getInstance("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Embraer_logo.png/800px-Embraer_logo.png");
            img.setAbsolutePosition(490f, 420f);
            img.scaleAbsolute(300f, 65f);

            //Definindo parágrafos para o título do documento PDF
            Font fontTitle = FontFactory.getFont(FontFactory.HELVETICA, 35, Font.BOLD, new BaseColor(9, 22, 163));

            Paragraph title = new Paragraph(new Phrase("Report of Chassis " + chassiId, fontTitle));
            title.setAlignment(Element.ALIGN_LEFT);

            //Pula linha
            Paragraph pulaLinhaLong = new Paragraph(new Phrase(" ", FontFactory.getFont(FontFactory.HELVETICA, 21, BaseColor.BLACK)));
            Paragraph pulaLinhaShort = new Paragraph(new Phrase(" ", FontFactory.getFont(FontFactory.HELVETICA, 1, BaseColor.BLACK)));

            //Datahora de emissão e usuário
            Font fontDate = FontFactory.getFont(FontFactory.HELVETICA, 26, new BaseColor(9, 22, 163));

            SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
            String formatedDate = dateFormat.format(new Timestamp(System.currentTimeMillis()));

            Paragraph date = new Paragraph(new Phrase("DateTime: " + formatedDate, fontDate));
            Paragraph user = new Paragraph(new Phrase("User: " + userName, fontDate));

            //Adicionando os parágrafos, imagem e tabela ao documento PDF
            document.add(img);
            document.add(title);
            document.add(pulaLinhaLong);
            document.add(user);
            document.add(pulaLinhaShort);
            document.add(date);
            document.add(pulaLinhaLong);
            document.add(table);

            document.close();

        } catch (DocumentException ex) {
            ex.printStackTrace();
        }

        return new ByteArrayInputStream(out.toByteArray());
    }


}
