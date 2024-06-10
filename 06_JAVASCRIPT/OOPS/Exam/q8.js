// Create a class Book with properties title, author, and pages. Write a method for print Book details and create a method to implement 10% discount for each book.


class Book{

    setBook(title,author,pages)
    {
        this.stitile=title
        this.sauthor=author
        this.spages=pages
        console.log("Book Details");
    }

    printBookdetails()
    {
        console.log(this.stitile,this.sauthor,this.spages);
    }

    discount()
    {
        console.log("10 percent discount");
    }
}

b1=new Book()
b1.setBook("Adujeevitham","Benyamin",1028)
b1.printBookdetails()
b1.discount()

