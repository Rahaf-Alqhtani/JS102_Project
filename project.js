// CREATE VEHICHE CLASS
class Vehiche{
     vehiche_ID 
     vehiche_name
     vehiche_Company_name

      constructor (vehiche_ID ,vehiche_name, vehiche_Company_name)
      {
           this.vehiche_ID= vehiche_ID
           this.vehiche_name=vehiche_name
           this.vehiche_Company_name=vehiche_Company_name
      }
}
 // CREATE  CAR CLASS INHARENT FROM  VEHICHE CLASS.
 class Car extends Vehiche{
      constructor(vehiche_ID,Vehiche_name,Vehiche_Company_name,car_Type){
           super(vehiche_ID,Vehiche_name,Vehiche_Company_name)

           this.car_Type=car_Type
      }
 }
 //  CREATE PLANE CLASS INHARENT FROM  VEHICHE CLASS.
  class Plane extends Vehiche{

     constructor(Vehiche_ID,Vehiche_name,Vehiche_Company_name,Plane_type){
          super(Vehiche_ID,Vehiche_name,Vehiche_Company_name)
          this.Plane_type=Plane_type
     }
  }
//CREATE EMPLOYEE CLASS
class Employee{
      Employee_ID
      Employee_Name
      Employee_DOB
     constructor(Employee_ID, Employee_Name,Employee_DOB){
                this.Employee_ID=Employee_ID
                this.Employee_Name=Employee_Name
                this.Employee_DOB=Employee_DOB
     }
 }
   // CREATE DRIVER CLASS INHARENTED FROM EMPLOYEE CLASS 
    class Driver extends Employee{
     constructor(Employee_ID,Employee_Name,Employee_DOB,Driver_licen_ID){
          super(Employee_ID,Employee_Name,Employee_DOB)
          this.Driver_licen_ID=Driver_licen_ID
     }
 
}
    // CREATE PILOT CLASS INHARENTED FROM EMPLOYEE CLASS 

    class Pilot extends Employee{
      constructor(Employee_ID, Employee_Name,Employee_DOB, Pilot_ID_licen){
           super(Employee_ID, Employee_Name,Employee_DOB)
           this.Pilot_ID_licen=Pilot_ID_licen
      }

 }

  //CREATE RESERVATION CLASS.
class Reservation{
     Rsrv_ID
     Employee_ID
     Vehiche_ID
     Rsrv_Date
     constructor(Rsrv_ID,Employee_ID,Vehiche_ID,Rsrv_Date){
          this.Rsrv_ID=Rsrv_ID
          this.Vehiche_ID=Vehiche_ID
          this.Employee_ID=Employee_ID
          this.Rsrv_Date=Rsrv_Date
     }

}
 //   CREATE AN OBJECT FOR 3 CARS AND 2 PLANE
 const car1=new Car(11 ,'GMC','GMC','gaz')
 const car2=new Car(12 ,'BMD','BMW','gaz')
 const car3=new Car(13 ,'GMC','GMC','electronic')
 const plane1=new Plane(04,'BMD','BMW','gaz')
 const Plane2=new Plane(05,'BMD','BMW','gaz')

 // CREATE AN OBJECT FOR 2 DRIVERS AND 2 PILOTS.
  const driver1 =new Driver(21,'Ahmad',1990-02-30,123-123-1234)
  const driver2=new Driver(22,'Ali',1990-04-05,321-321-4321)
  const pilot=new Pilot(31,'Sami',1990-04-09,987-987-9876)
  const pilot2=new Pilot(32,'Abdullah',1990-03-02,678-678-6789)

  // CREATE AN OBJECT FROM RESERVATION CLASS
  const RS1=new Reservation(21,01,11,2020)
  const RS2=new Reservation(22,02,12,2020)
  const RS3=new Reservation(23,03,13,0202)

  // CREATE CHECK FUNCTION 
  let ArrayMap =[]
  function CheckReservation(Vehiche_ID,Employee_ID)
  {
       let Reserved=[]
       if(Vehiche_ID==0 && Employee_ID==1){ 
           console.log('incompatibility')
         }
       else if (Vehiche_ID==0 && Employee_ID==0)
       { 
          //  Reserved.push(new Reservation(1,Employee_ID,Vehiche_ID,'2019-4-6'))
          Reserved.push(RS1)
           ArrayMap = Reserved.map(function(currentValue)
           {
           return currentValue;})
       }
   }
 CheckReservation(0,0);
 console.log(ArrayMap);