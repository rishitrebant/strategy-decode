"use client";

import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Container,
  Section,
  Input,
  Textarea,
  Label,
  Separator,
  Heading,
  Body,
  Caption,
  Display,
  Subheading,
} from "@/components/ui";

export default function DesignSystemPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <Section padding="xl" background="default">
        <Container>
          <Display size="lg" className="mb-6">
            Design System
          </Display>
          <Body size="lg" color="muted" className="max-w-2xl">
            Premium editorial design foundations for Strategy Decode. Built with Tailwind CSS and composable React components.
          </Body>
        </Container>
      </Section>

      {/* Color System */}
      <Section padding="lg" background="muted">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Color Palette
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Primary */}
            <Card>
              <CardHeader>
                <CardTitle>Primary</CardTitle>
                <CardDescription>#1e3a5f (Steel Blue)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-primary rounded border border-border" />
                  <div className="w-16 h-16 bg-primary-hover rounded border border-border" />
                </div>
                <Caption className="mt-3">Primary & Hover</Caption>
              </CardContent>
            </Card>

            {/* Secondary */}
            <Card>
              <CardHeader>
                <CardTitle>Secondary</CardTitle>
                <CardDescription>#8b7355 (Warm Brown)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <div className="w-16 h-16 bg-secondary rounded border border-border" />
                  <div className="w-16 h-16 bg-secondary-hover rounded border border-border" />
                </div>
                <Caption className="mt-3">Secondary & Hover</Caption>
              </CardContent>
            </Card>

            {/* Neutrals */}
            <Card>
              <CardHeader>
                <CardTitle>Neutral Scale</CardTitle>
                <CardDescription>50 – 900</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  <div className="flex-1 h-12 bg-neutral-50 border border-border" />
                  <div className="flex-1 h-12 bg-neutral-100 border border-border" />
                  <div className="flex-1 h-12 bg-neutral-200 border border-border" />
                  <div className="flex-1 h-12 bg-neutral-500 border border-border" />
                  <div className="flex-1 h-12 bg-neutral-900 border border-border" />
                </div>
                <Caption className="mt-3">Premium grays</Caption>
              </CardContent>
            </Card>

            {/* Success */}
            <Card>
              <CardHeader>
                <CardTitle>Success</CardTitle>
                <CardDescription>#059669</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-16 h-16 bg-success rounded border border-border" />
              </CardContent>
            </Card>

            {/* Destructive */}
            <Card>
              <CardHeader>
                <CardTitle>Destructive</CardTitle>
                <CardDescription>#dc2626</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-16 h-16 bg-destructive rounded border border-border" />
              </CardContent>
            </Card>

            {/* Info */}
            <Card>
              <CardHeader>
                <CardTitle>Info</CardTitle>
                <CardDescription>#0891b2</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-16 h-16 bg-info rounded border border-border" />
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Typography */}
      <Section padding="lg" background="default">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Typography
          </Heading>

          <div className="space-y-12">
            <Card>
              <CardHeader>
                <CardTitle>Font Family</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Caption className="mb-2 block">Sans (Geist)</Caption>
                  <div className="font-sans text-lg">The quick brown fox jumps over the lazy dog</div>
                </div>
                <Separator />
                <div>
                  <Caption className="mb-2 block">Mono (Geist Mono)</Caption>
                  <div className="font-mono text-lg">const system = &quot;premium editorial&quot;</div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div>
                <Heading as="h1" size="h1">Display / H1 – 3rem–3.75rem</Heading>
              </div>
              <div>
                <Heading as="h2" size="h2">Section Heading / H2 – 2.25rem–3rem</Heading>
              </div>
              <div>
                <Heading as="h3" size="h3">Card Title / H3 – 1.875rem–2.25rem</Heading>
              </div>
              <div>
                <Heading as="h4" size="h4">Subheading / H4 – 1.5rem</Heading>
              </div>
              <div>
                <Subheading size="lg">Section Label – 1.125rem</Subheading>
              </div>
              <div>
                <Body size="lg">Body Large – 1.125rem</Body>
              </div>
              <div>
                <Body>Body Default – 1rem</Body>
              </div>
              <div>
                <Body size="sm">Body Small – 0.875rem</Body>
              </div>
              <div>
                <Caption>Caption – 0.875rem</Caption>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Buttons */}
      <Section padding="lg" background="muted">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Buttons
          </Heading>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>States</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Badges */}
      <Section padding="lg" background="default">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Badges
          </Heading>

          <Card>
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="muted">Muted</Badge>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Form Elements */}
      <Section padding="lg" background="muted">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Form Elements
          </Heading>

          <Card>
            <CardHeader>
              <CardTitle>Input Fields & Labels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="email" required>Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input
                  id="disabled"
                  placeholder="This is disabled"
                  disabled
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Cards */}
      <Section padding="lg" background="default">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Cards
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>This is a card description</CardDescription>
              </CardHeader>
              <CardContent>
                <Body>
                  Cards are composable containers with headers, content, and footers. They feature minimal shadows and clean borders.
                </Body>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover to see subtle effects</CardDescription>
              </CardHeader>
              <CardContent>
                <Body>
                  Cards provide a premium, editorial aesthetic perfect for content organization and highlighting key information.
                </Body>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Spacing & Layout */}
      <Section padding="lg" background="muted">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Spacing System
          </Heading>

          <Card>
            <CardHeader>
              <CardTitle>Modular Scale (4px Base)</CardTitle>
              <CardDescription>
                Consistent spacing ensures visual harmony across all components
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 6, 8, 12, 16].map((size) => (
                  <div key={size} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium">
                      {size * 0.25}rem
                    </div>
                    <div className={`bg-primary h-8 flex-grow`} style={{ width: `${size * 20}px` }} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Border Radius */}
      <Section padding="lg" background="default">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Border Radius
          </Heading>

          <Card>
            <CardHeader>
              <CardTitle>Minimal, Editorial Style</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-primary h-16 w-full rounded-none mb-2" />
                  <Caption>None (0px)</Caption>
                </div>
                <div className="text-center">
                  <div className="bg-primary h-16 w-full rounded-sm mb-2" />
                  <Caption>Small (2px)</Caption>
                </div>
                <div className="text-center">
                  <div className="bg-primary h-16 w-full rounded-md mb-2" />
                  <Caption>Medium (4px)</Caption>
                </div>
                <div className="text-center">
                  <div className="bg-primary h-16 w-full rounded-full mb-2" />
                  <Caption>Full (9999px)</Caption>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Shadow System */}
      <Section padding="lg" background="muted">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Shadow System
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>No Shadow</CardTitle>
              </CardHeader>
            </Card>
            <Card className="shadow-xs">
              <CardHeader>
                <CardTitle>Extra Small</CardTitle>
              </CardHeader>
            </Card>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Small</CardTitle>
              </CardHeader>
            </Card>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Medium</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Container Widths */}
      <Section padding="lg" background="default">
        <Container>
          <Heading as="h2" size="h2" className="mb-8">
            Container System
          </Heading>

          <Card>
            <CardHeader>
              <CardTitle>Responsive Breakpoints</CardTitle>
              <CardDescription>
                Max-width containers with fluid padding
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Body>
                <strong>sm:</strong> 640px
              </Body>
              <Body>
                <strong>md:</strong> 768px
              </Body>
              <Body>
                <strong>lg:</strong> 1024px
              </Body>
              <Body>
                <strong>xl:</strong> 1280px
              </Body>
              <Body>
                <strong>2xl:</strong> 1536px
              </Body>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Footer */}
      <Section padding="lg" background="default" border="top">
        <Container className="text-center">
          <Body color="muted" size="sm">
            Strategy Decode • Premium Editorial Design System
          </Body>
        </Container>
      </Section>
    </div>
  );
}
