import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Award, CheckCircle } from "lucide-react";

interface InternshipCardProps {
  name: string;
  description: string;
  duration: string;
  charges: string;
  skillsEarned: string[];
  requirements: string[];
  onApply?: () => void;
}

const InternshipCard = ({ 
  name, 
  description, 
  duration, 
  charges, 
  skillsEarned, 
  requirements,
  onApply 
}: InternshipCardProps) => {
  return (
    <Card className="group h-full bg-card border-border hover:border-primary/20 transition-all duration-300 hover:shadow-hover transform hover:-translate-y-1">
      <CardHeader className="space-y-4">
        <div>
          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Duration and Charges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <DollarSign className="h-4 w-4 text-accent" />
            <span className="font-medium text-accent">{charges}</span>
          </div>
        </div>

        {/* Skills to be Earned */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-secondary" />
            <h4 className="font-semibold text-sm">Skills You'll Gain:</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsEarned.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-sm">Requirements:</h4>
          </div>
          <ul className="space-y-1">
            {requirements.map((requirement, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button 
          onClick={onApply}
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground" 
          variant="outline"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;