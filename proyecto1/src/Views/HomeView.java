package Views;

import Controler.Controler;

import javax.swing.*;
import javax.swing.filechooser.FileNameExtensionFilter;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class HomeView extends JFrame{
    public JTextArea newArea;
    public JLabel erroresGenerados;
    public JScrollPane paneScrol;
    public JMenuItem openFile;
    public JButton clean;
    public JMenuItem saveAs;
    public JButton run;
    public Controler controlador;
    public HomeView(){
        controlador = new Controler();
        this.setDefaultCloseOperation(EXIT_ON_CLOSE);
        this.setLayout(null);
        this.setTitle("Projecto 1 OLC1");
        this.setLocationRelativeTo(null);
        //label Name
        JLabel newLabel = new JLabel("<html><span style ='font-size:12px'>"+"OLC1_2S_2022 201908658"+"</span></html>");
        newLabel.setBounds(400,12,250,25);
        newLabel.setForeground(Color.WHITE);
        // menu bar
        JMenuBar newMenu = new JMenuBar();
        newMenu.setBackground(new Color(66, 73, 73 ));
        //menus
        JMenu File = new JMenu("File");
        JMenu Report = new JMenu("Report");
        JMenu View = new JMenu("View");
        File.setForeground(Color.WHITE);
        Report.setForeground(Color.WHITE);
        View.setForeground(Color.WHITE);
        // menu items file
        openFile = new JMenuItem("Open File");
        openFile.setBackground(new Color(66, 73, 73 ));
        openFile.setForeground(Color.WHITE);
        openFile.addActionListener(this::actionPerformed);

        saveAs = new JMenuItem("Save As");
        saveAs.setBackground(new Color(66, 73, 73 ));
        saveAs.addActionListener(this::actionPerformed);
        saveAs.setForeground(Color.WHITE);
        File.add(openFile);
        File.add(saveAs);
        // menu items report
        JMenuItem flowChart = new JMenuItem("FlowChart");
        flowChart.setBackground(new Color(66, 73, 73 ));
        flowChart.setForeground(Color.WHITE);
        JMenuItem errors = new JMenuItem("Errors");
        errors.setBackground(new Color(66, 73, 73 ));
        errors.setForeground(Color.WHITE);
        Report.add(flowChart);
        Report.add(errors);
        // menu items View
        JMenuItem userManual = new JMenuItem("User Manual");
        userManual.setBackground(new Color(66, 73, 73 ));
        userManual.setForeground(Color.WHITE);
        JMenuItem technicalManual = new JMenuItem("Technical Manual");
        technicalManual.setBackground(new Color(66, 73, 73 ));
        technicalManual.setForeground(Color.WHITE);

        View.add(userManual);
        View.add(technicalManual);
        newMenu.add(File);
        newMenu.add(Report);
        newMenu.add(View);
        newMenu.setBounds(10,12,125,25);

        //Buttons area
        clean = new JButton("Clean");
        clean.setBounds(425,75,65,25);
        clean.setBackground(new Color(127, 179, 213));
        clean.addActionListener(this::actionPerformed);
        clean.setForeground(Color.WHITE);

        run = new JButton("Run");
        run.setBackground(new Color(88, 214, 141  ));
        run.setForeground(Color.WHITE);
        run.addActionListener(this::actionPerformed);
        run.setBounds(500,75,65,25);

        // text area
        newArea = new JTextArea();
        newArea.setBackground(new Color(79, 79, 78));
        newArea.setBorder(BorderFactory.createTitledBorder("Texto"));
        newArea.setForeground(Color.WHITE);
        newArea.setCaretColor(Color.WHITE);
        newArea.setFont(new Font("Arial",Font.PLAIN,18));

        //scrol
        paneScrol = new JScrollPane(newArea);
        paneScrol.setBounds(20,150,610,500);
        paneScrol.setVisible(true);
        // Botones finales
        erroresGenerados = new JLabel("0 Errors");
        erroresGenerados.setBounds(50,700,60,25);
        erroresGenerados.setForeground(Color.WHITE);
        JButton golandButton = new JButton("View code Goland");
        golandButton.setBounds(300,700,150,25);
        golandButton.setBackground(new Color(66, 73, 73 ));
        golandButton.setForeground(Color.WHITE);
        golandButton.setBorder(BorderFactory.createLineBorder(Color.WHITE));
        JButton pythoButton = new JButton("View code Python");
        pythoButton.setBounds(470,700,150,25);
        pythoButton.setBackground(new Color(66, 73, 73 ));
        pythoButton.setForeground(Color.WHITE);
        pythoButton.setBorder(BorderFactory.createLineBorder(Color.WHITE));

        this.add(clean);
        this.add(run);
        this.add(newMenu);
        this.add(newLabel);
        this.add(paneScrol);
        this.add(erroresGenerados);
        this.add(pythoButton);
        this.add(golandButton);
        this.setSize(650,800);
        this.getContentPane().setBackground(new Color(66, 73, 73 ));
    }
    public void actionPerformed(ActionEvent e){
        if(e.getSource() == openFile){
            JFileChooser file = new JFileChooser();
            FileNameExtensionFilter filter = new FileNameExtensionFilter(
                    "Document OLC","olc");
            file.setFileFilter(filter);
            int returnVal = file.showOpenDialog(this);
            if(returnVal == JFileChooser.APPROVE_OPTION){
                String ruteFile = file.getSelectedFile().toString();
                try{
                    File newFile = new File(ruteFile);
                    Scanner myReader = new Scanner(newFile);
                    String data ="";
                    while (myReader.hasNextLine()){
                        data += myReader.nextLine() +"\n";
                    }
                    newArea.setText(data);//controlador.generateCompiling(data);
                }catch (FileNotFoundException err){
                    System.out.println("An error occurred.");
                    err.printStackTrace();
                }

            }
        }else if (e.getSource() == clean){
            newArea.setText("");
        } else if (e.getSource() == saveAs) {
            String dataPanel = newArea.getText();
            String name=JOptionPane.showInputDialog(this,"Ingrese el Nombre para el archivo");
            if (name!= null){
                JOptionPane.showMessageDialog(this,"Nombre Obligatorio");
            }else {
                this.saveDocument(name,dataPanel);
            }
        } else if (e.getSource()==run) {
            String data =newArea.getText();
            controlador.generateCompiling(data);
        }
    }
    public void saveDocument(String name,String dataResult){
        try {
            File newDocument = new File(name);
            if(newDocument.createNewFile()){
                FileWriter writerDocument = new FileWriter(name);
                writerDocument.write(dataResult);
                writerDocument.close();
            }else {
                System.out.println("existe File");
                FileWriter writerDocument = new FileWriter(name);
                writerDocument.write(dataResult);
                writerDocument.close();
            }
        }catch (IOException err){
            System.out.println("An error occurred.");
            err.printStackTrace();
        }
    }

}