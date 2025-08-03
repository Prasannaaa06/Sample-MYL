import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Star } from "lucide-react";
import pythonImage from "@/assets/python-course.jpg";
import gcpImage from "@/assets/gcp-course.jpg";
import awsImage from "@/assets/aws-course.jpg";
import linuxImage from "@/assets/linux-course.jpg";
import ansibleImage from "@/assets/ansible-course.jpg";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  image?: string;
}

const CourseCard = ({ id, title, description, duration, students, rating }: CourseCardProps) => {
  const getImageForCourse = (courseId: string) => {
    switch (courseId) {
      case "web-development":
        return pythonImage;
      case "data-science":
        return gcpImage;
      case "digital-marketing":
        return awsImage;
      case "graphic-design":
        return linuxImage;
      case "mobile-development":
        return ansibleImage;
      default:
        return pythonImage;
    }
  };
  return (
    <Card className="group h-full bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-hover transform hover:-translate-y-1">
      <CardHeader className="space-y-4">
        <div className="w-full h-48 overflow-hidden rounded-lg">
          <img 
            src={getImageForCourse(id)} 
            alt={`${title} course preview`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2 line-clamp-3">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students} students</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current text-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">(4.5+)</span>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
          <Link to={`/course/${id}`}>
            Explore Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;